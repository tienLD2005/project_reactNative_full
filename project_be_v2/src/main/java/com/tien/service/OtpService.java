package com.tien.service;

import com.tien.entity.Otp;
import com.tien.entity.User;

public interface OtpService {
    String generateOtpCode();
    Otp createOtp(User user);
    boolean verifyOtp(String otpCode, String phoneNumber);
    void sendOtpSms(String phoneNumber, String otpCode);
    void resendOtp(String phoneNumber);
    void deleteOtp(User user);
}
