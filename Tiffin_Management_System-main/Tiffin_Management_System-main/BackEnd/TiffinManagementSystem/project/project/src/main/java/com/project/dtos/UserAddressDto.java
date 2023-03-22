package com.project.dtos;

public class UserAddressDto {

	private int addressId;
	private int userId;
	private String addressLine;
	private int locationId;
	
	public UserAddressDto() {
		// TODO Auto-generated constructor stub
	}

	public UserAddressDto(int addressId, int userId, String addressLine, int locationId) {
		super();
		this.addressId = addressId;
		this.userId = userId;
		this.addressLine = addressLine;
		this.locationId = locationId;
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

	public int getLocationId() {
		return locationId;
	}

	public void setLocationId(int locationId) {
		this.locationId = locationId;
	}

	@Override
	public String toString() {
		return "UserAddressDto [addressId=" + addressId + ", userId=" + userId + ", addressLine=" + addressLine
				+ ", locationId=" + locationId + "]";
	}
}
