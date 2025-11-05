import { API_CONFIG } from '@/constants/api';
import axios from 'axios';

/**
 * Test connection to backend server
 * This utility helps debug connection issues
 */
export const testBackendConnection = async () => {
    try {
        console.log('🔍 Testing backend connection...');
        console.log('🌐 Backend URL:', API_CONFIG.BASE_URL);

        // Test basic connectivity
        const response = await axios.get(API_CONFIG.BASE_URL.replace('/api/v1', '/actuator/health'), {
            timeout: 5000,
        });

        console.log('✅ Backend is reachable!');
        console.log('📊 Status:', response.status);
        return true;
    } catch (error: any) {
        console.error('❌ Backend connection failed!');

        if (error.code === 'ECONNREFUSED') {
            console.error('🚫 Connection refused - Is backend running?');
        } else if (error.code === 'ETIMEDOUT') {
            console.error('⏱️ Connection timeout - Check network/URL');
        } else if (error.message === 'Network Error') {
            console.error('🌐 Network error - Check your internet connection');
        } else {
            console.error('🔥 Error:', error.message);
        }

        return false;
    }
};

/**
 * Get current network info (for debugging)
 */
export const getNetworkInfo = async () => {
    const info = {
        baseURL: API_CONFIG.BASE_URL,
        timeout: API_CONFIG.TIMEOUT,
        timestamp: new Date().toISOString(),
    };

    console.log('📱 Network Configuration:', JSON.stringify(info, null, 2));
    return info;
};

/**
 * Test specific endpoint
 */
export const testEndpoint = async (endpoint: string, method: string = 'GET', data?: any) => {
    try {
        console.log(`🧪 Testing ${method} ${endpoint}...`);

        const config: any = {
            method,
            url: API_CONFIG.BASE_URL + endpoint,
            timeout: 5000,
        };

        if (data) {
            config.data = data;
            config.headers = { 'Content-Type': 'application/json' };
        }

        const response = await axios(config);
        console.log('✅ Success!', response.data);
        return response.data;
    } catch (error: any) {
        console.error('❌ Failed!');
        if (error.response) {
            console.error('Status:', error.response.status);
            console.error('Data:', error.response.data);
        } else {
            console.error('Error:', error.message);
        }
        throw error;
    }
};

