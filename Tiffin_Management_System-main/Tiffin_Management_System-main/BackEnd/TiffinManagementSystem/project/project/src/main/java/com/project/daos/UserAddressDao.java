package com.project.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.entities.UserAddress;

public interface UserAddressDao extends JpaRepository<UserAddress, Integer> {
	
	UserAddress findByAddressId(int addressId);
	UserAddress findByUserId(int userId);
}
