package com.tien.service;

import com.tien.dto.request.BookingRequest;
import com.tien.dto.response.BookingResponseDTO;

import java.util.List;

public interface BookingService {
    BookingResponseDTO createBooking(BookingRequest request);
    List<BookingResponseDTO> getUpcomingBookings(Integer userId);
    List<BookingResponseDTO> getPastBookings(Integer userId);
    BookingResponseDTO getBookingById(Integer bookingId);
    BookingResponseDTO cancelBooking(Integer bookingId);
    List<BookingResponseDTO> getUserBookings(Integer userId);
}

