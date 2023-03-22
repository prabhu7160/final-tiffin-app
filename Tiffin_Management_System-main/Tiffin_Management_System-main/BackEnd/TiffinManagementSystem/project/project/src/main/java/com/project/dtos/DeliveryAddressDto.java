package com.project.dtos;

public class DeliveryAddressDto {

	private int locationId;
	private String deliveryArea;
	private String city;
	private int pinCode;
	
	public DeliveryAddressDto() {
		// TODO Auto-generated constructor stub
	}

	public DeliveryAddressDto(int locationId, String deliveryArea, String city, int pinCode) {
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

	@Override
	public String toString() {
		return "DeliveryAddressDto [locationId=" + locationId + ", deliveryArea=" + deliveryArea + ", city=" + city
				+ ", pinCode=" + pinCode + "]";
	}
}
