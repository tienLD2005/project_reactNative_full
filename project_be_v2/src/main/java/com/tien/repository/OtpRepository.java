package com.tien.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.tien.entity.Otp;
import com.tien.entity.User;

@Repository
public interface OtpRepository extends JpaRepository<Otp, Integer> {
    Optional<Otp> findByUser(User user);
    Optional<Otp> findByOtpCodeAndUser(String otpCode, User user);
    void deleteByUser(User user);
}
