package com.tien.service;

import com.tien.dto.response.HotelResponseDTO;
import com.tien.entity.Hotel;

import java.util.List;

public interface HotelService {
    List<HotelResponseDTO> getAllHotels();
    List<HotelResponseDTO> getHotelsByCity(String city);
    List<HotelResponseDTO> searchHotels(String keyword);
    HotelResponseDTO getHotelById(Integer hotelId);
}

