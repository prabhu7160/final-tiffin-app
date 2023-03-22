 package com.project.entities;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Table(name = "orders")
public class Order {

	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	@Column(name = "order_id")
	private int orderId;
	
	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "start_date")
	private Date startDate;
	
	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "end_date")
	private Date endDate;
	
	@Column
	private int totalDays;
	
	@Column(name = "total_amount")
	private int totalAmount;
	
	@ManyToOne
	@JoinColumn(name = "user_id")
	private User user;
	
	@ManyToOne
	@JoinColumn(name = "tiffin_id")
	private TiffinDetail tiffinDetails;
	
	@OneToOne	
	@JoinColumn(name="order_id")
	private Payment payment;
	
	@OneToOne(mappedBy = "order")
	private DaywiseOrder daywiseOrder;
	
	public Order() {
		// TODO Auto-generated constructor stub
	}

	public Order(int orderId, Date startDate, Date endDate, int totalDays, int totalAmount, User user,
			TiffinDetail tiffinDetails, Payment payment, DaywiseOrder daywiseOrder) {
		super();
		this.orderId = orderId;
		this.startDate = startDate;
		this.endDate = endDate;
		this.totalDays = totalDays;
		this.totalAmount = totalAmount;
		this.user = user;
		this.tiffinDetails = tiffinDetails;
		this.payment = payment;
		this.daywiseOrder = daywiseOrder;
	}
public Order(int orderId) {
	this.orderId=orderId;
}
	public int getOrderId() {
		return orderId;
	}

	public void setOrderId(int orderId) {
		this.orderId = orderId;
	}

	public Date getStartDate() {
		return startDate;
	}

	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}

	public Date getEndDate() {
		return endDate;
	}

	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}

	public int getTotalDays() {
		return totalDays;
	}

	public void setTotalDays(int totalDays) {
		this.totalDays = totalDays;
	}

	public int getTotalAmount() {
		return totalAmount;
	}

	public void setTotalAmount(int totalAmount) {
		this.totalAmount = totalAmount;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public TiffinDetail getTiffinDetails() {
		return tiffinDetails;
	}

	public void setTiffinDetails(TiffinDetail tiffinDetails) {
		this.tiffinDetails = tiffinDetails;
	}

	public Payment getPayment() {
		return payment;
	}

	public void setPayment(Payment payment) {
		this.payment = payment;
	}
	
	public DaywiseOrder getDaywiseOrder() {
		return daywiseOrder;
	}

	public void setDaywiseOrder(DaywiseOrder daywiseOrder) {
		this.daywiseOrder = daywiseOrder;
	}

	@Override
	public String toString() {
		return "Order [orderId=" + orderId + ", startDate=" + startDate + ", endDate=" + endDate + ", totalDays="
				+ totalDays + ", totalAmount=" + totalAmount + "]";
	}
}
