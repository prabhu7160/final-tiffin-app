package com.project.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.project.daos.OrderDao;
import com.project.dtos.DtoEntityConverter;
import com.project.dtos.OrderDto;
import com.project.dtos.UserOrderDto;
import com.project.entities.Order;
import com.project.dtos.UserOrderDto;
@Transactional
@Service
public class OrderService {

	@Autowired
	private OrderDao orderDao;
	@Autowired
	private DtoEntityConverter converter;
	
	public OrderDto findOrderById(int orderId) {
		Order order = orderDao.findByOrderId(orderId);
		return converter.toOrderDto(order);
	}
	public OrderDto AddOrder(OrderDto userOrderDto) {
		userOrderDto.setTiffinId(userOrderDto.getTiffinId());
		Order order=converter.userOrderToOrder(userOrderDto);
		order=orderDao.save(order);
		return converter.toOrderDto(order);
	}
}
