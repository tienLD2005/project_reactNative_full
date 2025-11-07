package com.tien.entity;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
public class Paypal {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

}
