package com.project.dtos;

import java.util.Date;

import javax.persistence.Temporal;
import javax.persistence.TemporalType;

public class PaymentDto {

	private int transactionId;
	private int orderId;
	private String paymentType;
	private int totalPayment;
	private String  paymentStatus;
	@Temporal(TemporalType.TIMESTAMP)
	private Date paymentTime;
	
	public PaymentDto() {
		// TODO Auto-generated constructor stub
	}

	public PaymentDto(int transactionId, int orderId, String paymentType, int totalPayment, String paymentStatus,
			Date paymentTime) {
		super();
		this.transactionId = transactionId;
		this.orderId = orderId;
		this.paymentType = paymentType;
		this.totalPayment = totalPayment;
		this.paymentStatus = paymentStatus;
		this.paymentTime = paymentTime;
	}

	public int getTransactionId() {
		return transactionId;
	}

	public void setTransactionId(int transactionId) {
		this.transactionId = transactionId;
	}

	public int getOrderId() {
		return orderId;
	}

	public void setOrderId(int orderId) {
		this.orderId = orderId;
	}

	public String getPaymentType() {
		return paymentType;
	}

	public void setPaymentType(String paymentType) {
		this.paymentType = paymentType;
	}

	public int getTotalPayment() {
		return totalPayment;
	}

	public void setTotalPayment(int totalPayment) {
		this.totalPayment = totalPayment;
	}

	public String getPaymentStatus() {
		return paymentStatus;
	}

	public void setPaymentStatus(String paymentStatus) {
		this.paymentStatus = paymentStatus;
	}

	public Date getPaymentTime() {
		return paymentTime;
	}

	public void setPaymentTime(Date paymentTime) {
		this.paymentTime = paymentTime;
	}

	@Override
	public String toString() {
		return "PaymentDto [transactionId=" + transactionId + ", orderId=" + orderId + ", paymentType=" + paymentType
				+ ", totalPayment=" + totalPayment + ", paymentStatus=" + paymentStatus + ", paymentTime=" + paymentTime
				+ "]";
	}
}
