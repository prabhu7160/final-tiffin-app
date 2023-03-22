package com.project.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.entities.DeliveryAddress;

public interface DeliveryAddressDao extends JpaRepository<DeliveryAddress, Integer> {

	DeliveryAddress findByLocationId(int locationId);
}
