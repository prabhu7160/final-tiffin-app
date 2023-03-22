package com.project.entities;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "delivery_address")
public class DeliveryAddress {

	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	@Column(name = "location_id")
	private int locationId;
	
	@Column(name = "delivery_area")
	private String deliveryArea;
	
	@Column
	private String city;
	
	@Column(name = "pin_code")
	private int pinCode;
	
	@OneToMany(mappedBy = "deliveryAddress")
	List<UserAddress> userAddresses;
	
	public DeliveryAddress() {
		// TODO Auto-generated constructor stub
	}

	public DeliveryAddress(int locationId, String deliveryArea, String city, int pinCode) {
		super();
		this.locationId = locationId;
		this.deliveryArea = deliveryArea;
		this.city = city;
		this.pinCode = pinCode;
	}

	public int getLocationId() {
		return locationId;
	}

	public void setLocationId(int locationId) {
		this.locationId = locationId;
	}

	public String getDeliveryArea() {
		return deliveryArea;
	}

	public void setDeliveryArea(String deliveryArea) {
		this.deliveryArea = deliveryArea;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public int getPinCode() {
		return pinCode;
	}

	public void setPinCode(int pinCode) {
		this.pinCode = pinCode;
	}

	public List<UserAddress> getUserAddresses() {
		return userAddresses;
	}

	public void setUserAddresses(List<UserAddress> userAddresses) {
		this.userAddresses = userAddresses;
	}

	@Override
	public String toString() {
		return "DeliveryAddress [locationId=" + locationId + ", deliveryArea=" + deliveryArea + ", city=" + city
				+ ", pinCode=" + pinCode + "]";
	}
}
