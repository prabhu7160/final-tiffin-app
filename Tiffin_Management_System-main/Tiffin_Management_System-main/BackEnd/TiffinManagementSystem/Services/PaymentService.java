package com.project.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.project.daos.PaymentDao;
import com.project.dtos.DtoEntityConverter;
import com.project.dtos.PaymentDto;
import com.project.entities.Payment;

@Transactional
@Service
public class PaymentService {

	@Autowired
	private PaymentDao paymentDao;
	@Autowired
	private DtoEntityConverter converter;
	
	public PaymentDto findByTransactionId(int transactionId) {
		Payment payment = paymentDao.findByTransactionId(transactionId);
		return converter.toPaymentDto(payment);
	}
	public PaymentDto savePaymentDetails(PaymentDto dto) {
		Payment p = new Payment();
		p.setOrderId(dto.getOrderId());
		p.setPaymentStatus(dto.getPaymentStatus());
		p.setPaymentType(dto.getPaymentType());
		p.setTotalPayment(dto.getTotalPayment());
		Payment payment = paymentDao.save(p);
		return converter.toPaymentDto(payment);
	}
}
