package com.project.entities;

import java.util.Date;

import javax.persistence.CascadeType;
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
@Table(name = "daywise_orders")
public class DaywiseOrder {

	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	@Column(name = "do_id")
	private int doId;

	@Temporal(TemporalType.TIMESTAMP)
	@Column
	private Date date;

	@Column
	private String session;

	@Column
	private int requirement;

	@Column
	private String status;

	@OneToOne
	@JoinColumn(name = "order_id")
	private Order order;

	@ManyToOne()
	@JoinColumn(name = "delivery_boy_id")
	private User deliveryBoy;

	public DaywiseOrder() {
		// TODO Auto-generated constructor stub
	}

	public DaywiseOrder(int doId, Date date, String session, int requirement, String status, Order order,
			User deliveryBoy) {
		super();
		this.doId = doId;
		this.date = date;
		this.session = session;
		this.requirement = requirement;
		this.status = status;
		this.order = order;
		this.deliveryBoy = deliveryBoy;
	}
	

	public DaywiseOrder(Date date, String session, int requirement, String status, Order order, User deliveryBoy) {
		super();
		this.date = date;
		this.session = session;
		this.requirement = requirement;
		this.status = status;
		this.order = order;
		this.deliveryBoy = deliveryBoy;
	}

	public int getDoId() {
		return doId;
	}

	public void setDoId(int doId) {
		this.doId = doId;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public String getSession() {
		return session;
	}

	public void setSession(String session) {
		this.session = session;
	}

	public int getRequirement() {
		return requirement;
	}

	public void setRequirement(int requirement) {
		this.requirement = requirement;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public Order getOrder() {
		return order;
	}

	public void setOrder(Order order) {
		this.order = order;
	}

	public User getDeliveryBoy() {
		return deliveryBoy;
	}

	public void setDeliveryBoy(User deliveryBoy) {
		this.deliveryBoy = deliveryBoy;
	}

	@Override
	public String toString() {
		return "DaywiseOrder [doId=" + doId + ", date=" + date + ", session=" + session + ", requirement=" + requirement
				+ ", status=" + status + "]";
	}
}
