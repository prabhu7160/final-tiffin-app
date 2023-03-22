package com.project.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.entities.Order;

public interface OrderDao extends JpaRepository<Order, Integer> {

	Order findByOrderId(int orderId);
	
}
