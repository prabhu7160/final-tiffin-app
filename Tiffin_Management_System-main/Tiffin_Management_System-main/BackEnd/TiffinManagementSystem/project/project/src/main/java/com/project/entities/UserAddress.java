package com.project.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "user_address")
public class UserAddress {

	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	@Column(name = "address_id")
	private int addressId;
	
	@Column(name = "user_id")
	private int userId;

	@Column(name = "address_line1")
	private String addressLine;

	@OneToOne(mappedBy = "userAddress")
	private User user;

	@ManyToOne
	@JoinColumn(name = "location_id")
	private DeliveryAddress deliveryAddress;

	public UserAddress() {
		// TODO Auto-generated constructor stub
	}

	public UserAddress(int addressId, int userId, String addressLine, User user, DeliveryAddress deliveryAddress) {
		super();
		this.addressId = addressId;
		this.userId = userId;
		this.addressLine = addressLine;
		this.user = user;
		this.deliveryAddress = deliveryAddress;
	}

	public int getAddressId() {
		return addressId;
	}

	public void setAddressId(int addressId) {
		this.addressId = addressId;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public String getAddressLine() {
		return addressLine;
	}

	public void setAddressLine(String addressLine) {
		this.addressLine = addressLine;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public DeliveryAddress getDeliveryAddress() {
		return deliveryAddress;
	}

	public void setDeliveryAddress(DeliveryAddress deliveryAddress) {
		this.deliveryAddress = deliveryAddress;
	}

	@Override
	public String toString() {
		return "UserAddress [addressId=" + addressId + ", addressId=" + addressId + ", addressLine=" + addressLine + "]";
	}
}
