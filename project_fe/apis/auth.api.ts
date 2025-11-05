import axiosInstance from '@/utils/axiosInstance';

// ========== TYPES ==========
export interface RegisterRequest {
    name: string;
    email: string;
    phoneNumber: string;
    gender: 'MALE' | 'FEMALE';
    password: string;
    dateOfBirth: string; // format: dd-MM-yyyy (VD: 31-12-2000)
}

export interface LoginRequest {
    email: string;
    password: string;
}

export interface RegisterResponse {
    success: boolean;
    message: string;
    data: {
        id: number;
        name: string;
        email: string;
        createdAt: string;
    };
}

export interface LoginResponse {
    success: boolean;
    message: string;
    data: {
        id: number;
        name: string;
        email: string;
        token: string;
    };
}

export interface ApiResponse<T = any> {
    success: boolean;
    message: string;
    data?: T;
}

// ========== AUTH APIs ==========

/**
 * Đăng ký tài khoản mới
 */
export const register = async (payload: RegisterRequest): Promise<RegisterResponse> => {
    try {
        const response = await axiosInstance.post<RegisterResponse>('/auth/register', payload);
        return response.data;
    } catch (error) {
        throw error;
    }
};

/**
 * Đăng nhập
 */
export const login = async (payload: LoginRequest): Promise<LoginResponse> => {
    try {
        const response = await axiosInstance.post<LoginResponse>('/auth/login', payload);
        return response.data;
    } catch (error) {
        throw error;
    }
};

/**
 * Quên mật khẩu - Gửi OTP qua email
 */
export const forgotPassword = async (email: string): Promise<ApiResponse> => {
    try {
        const response = await axiosInstance.post<ApiResponse>('/auth/forgot-password', {
            email,
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

/**
 * Xác thực OTP
 */
export const verifyOtp = async (
    email: string,
    otp: string,
    purpose: string = 'REGISTER'
): Promise<ApiResponse> => {
    try {
        const response = await axiosInstance.post<ApiResponse>('/auth/verify-otp', {
            email,
            otp,
            purpose,
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

/**
 * Đặt lại mật khẩu
 */
export const resetPassword = async (
    email: string,
    newPassword: string,
    otp: string
): Promise<ApiResponse> => {
    try {
        const response = await axiosInstance.post<ApiResponse>('/auth/reset-password', {
            email,
            newPassword,
            otp,
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

