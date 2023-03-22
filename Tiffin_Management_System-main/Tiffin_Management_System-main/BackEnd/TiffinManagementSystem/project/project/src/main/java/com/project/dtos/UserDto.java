package com.project.dtos;

public class UserDto {

	private int userId;
	private String userName;
	private String email;
	private String password;
	private String phone;
	private String role;
	private String aadharNo;
	
	public UserDto() {
		// TODO Auto-generated constructor stub
	}

	public UserDto(int userId, String userName, String email, String password, String phone, String role,
			String aadharNo) {
		super();
		this.userId = userId;
		this.userName = userName;
		this.email = email;
		this.password = password;
		this.phone = phone;
		this.role = role;
		this.aadharNo = aadharNo;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public String getAadharNo() {
		return aadharNo;
	}

	public void setAadharNo(String aadharNo) {
		this.aadharNo = aadharNo;
	}

	@Override
	public String toString() {
		return "UserDto [userId=" + userId + ", userName=" + userName + ", email=" + email + ", password=" + password
				+ ", phone=" + phone + ", role=" + role + ", aadharNo=" + aadharNo + "]";
	}
}
