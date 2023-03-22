package com.project.entities;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "users")
public class User {

	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	@Column(name = "user_id")
	private int userId;
	
	@Column(name = "user_name")
	private String userName;

	@Column
	private String email;
	
	@Column
	private String password;
	
	@Column
	private String phone;
	
	@Column
	private String role;
		
	@Column(name = "aadhar_no")
	private String aadharNo;
	
	@OneToMany(mappedBy = "user")
	private List<Order> orderList;
	
	@OneToMany(mappedBy = "deliveryBoy" )
	private List<DaywiseOrder> daywiseOrder;
	
	@OneToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "userId")
	private UserAddress userAddress;
	
	public User() {
		// TODO Auto-generated constructor stub
	}
	public User(int id) {
		this.userId=id;
	}

	public User(int userId, String userName, String email, String password, String phone, String role,
			String aadharNo, UserAddress userAddress) {
		super();
		this.userId = userId;
		this.userName = userName;
		this.email = email;
		this.password = password;
		this.phone = phone;
		this.role = role;
		this.aadharNo = aadharNo;
		this.userAddress = userAddress;
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

	public List<Order> getOrderList() {
		return orderList;
	}

	public void setOrderList(List<Order> orderList) {
		this.orderList = orderList;
	}

	public List<DaywiseOrder> getDaywiseOrder() {
		return daywiseOrder;
	}

	public void setDaywiseOrder(List<DaywiseOrder> daywiseOrder) {
		this.daywiseOrder = daywiseOrder;
	}

	public UserAddress getUserAddress() {
		return userAddress;
	}

	public void setUserAddress(UserAddress userAddress) {
		this.userAddress = userAddress;
	}

	@Override
	public String toString() {
		return "User [userId=" + userId + ", userName=" + userName + ", email=" + email + ", password=" + password
				+ ", phone=" + phone + ", role=" + role + ", aadharNo=" + aadharNo + "]";
	}	
}
