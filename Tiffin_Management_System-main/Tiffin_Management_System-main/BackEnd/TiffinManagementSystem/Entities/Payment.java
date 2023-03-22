package com.project.entities;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Table(name = "payment")
public class Payment {

	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	@Column(name = "transaction_id")
	private int transactionId;
	
	@Column(name = "order_id")
	private int orderId;
	
	@Column(name = "payment_type")
	private String paymentType;
	
	@Column(name = "total_payment")
	private int totalPayment;
	
	@Column(name = "payment_status")
	private String paymentStatus;
	
	@Temporal(TemporalType.TIMESTAMP)
	@Column(insertable = false, name = "payment_time")
	private Date paymentTime;
	
	@OneToOne(mappedBy = "payment")
	private Order order;
	
	public Payment() {
		// TODO Auto-generated constructor stub
	}

	public Payment(int transactionId, int orderId, String paymentType, int totalPayment, String paymentStatus,
			Date paymentTime, Order order) {
		super();
		this.transactionId = transactionId;
		this.orderId = orderId;
		this.paymentType = paymentType;
		this.totalPayment = totalPayment;
		this.paymentStatus = paymentStatus;
		this.paymentTime = paymentTime;
		this.order = order;
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

	public Order getOrder() {
		return order;
	}

	public void setOrder(Order order) {
		this.order = order;
	}

	@Override
	public String toString() {
		return "Payment [transactionId=" + transactionId + ", orderId=" + orderId + ", paymentType=" + paymentType
				+ ", totalPayment=" + totalPayment + ", paymentStatus=" + paymentStatus + ", paymentTime=" + paymentTime
				+ "]";
	}
}
