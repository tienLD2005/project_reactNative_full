package com.tien.service;

import java.util.List;

import com.tien.dto.request.ReviewRequest;
import com.tien.dto.response.ReviewResponseDTO;

public interface ReviewService {
    ReviewResponseDTO createReview(ReviewRequest request);
    ReviewResponseDTO updateReview(Integer reviewId, ReviewRequest request);
    ReviewResponseDTO getMyReviewByRoomId(Integer roomId);
    List<ReviewResponseDTO> getReviewsByRoomId(Integer roomId);
    List<ReviewResponseDTO> getReviewsByUserId(Integer userId);
    ReviewResponseDTO getReviewById(Integer reviewId);
}

