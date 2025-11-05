import AsyncStorage from '@react-native-async-storage/async-storage';
import axios, { AxiosError, AxiosInstance } from 'axios';


const BASE_URL = 'http://192.168.1.206:8080/api/v1';

const axiosInstance: AxiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 30000, // 30 seconds (cho email sending)
});

// Request Interceptor - Tự động thêm JWT token vào mọi request
axiosInstance.interceptors.request.use(
    async (config) => {
        try {
            const token = await AsyncStorage.getItem('userToken');
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
        } catch (error) {
            console.error('Error getting token:', error);
        }

        // Log request (chỉ trong development)
        if (__DEV__) {
            console.log('📤 API Request:', config.method?.toUpperCase(), config.url);
            if (config.data) {
                console.log('📦 Request Data:', config.data);
            }
        }

        return config;
    },
    (error) => {
        console.error('Request Error:', error);
        return Promise.reject(error);
    }
);

// Response Interceptor - Xử lý lỗi global
axiosInstance.interceptors.response.use(
    (response) => {
        // Log response (chỉ trong development)
        if (__DEV__) {
            console.log('📥 API Response:', response.status, response.config.url);
            console.log('✅ Response Data:', response.data);
        }
        return response;
    },
    async (error: AxiosError) => {
        // Log error
        if (__DEV__) {
            console.error('❌ API Error:', error.message);
            if (error.response) {
                console.error('Status:', error.response.status);
                console.error('Data:', error.response.data);
            }
        }

        // Handle 401 Unauthorized - Token expired
        if (error.response?.status === 401) {
            await AsyncStorage.removeItem('userToken');
            await AsyncStorage.removeItem('userData');
            // Có thể dispatch event để redirect về login
        }

        return Promise.reject(error);
    }
);

export default axiosInstance;

