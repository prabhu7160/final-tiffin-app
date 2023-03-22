package com.project.dtos;

import java.util.Date;

import javax.persistence.Temporal;
import javax.persistence.TemporalType;

public class ActiveUsers {
	private int userId;
	private String userName;
	@Temporal(TemporalType.TIMESTAMP)
	private Date startDate;
	@Temporal(TemporalType.TIMESTAMP)
	private Date endDate;
	private int totalDays;
	private int totalAmount;
	private int tiffinId;
	public ActiveUsers(int userId, String userName, Date startDate, Date endDate, int totalDays, int totalAmount,
			int tiffinId) {
		super();
		this.userId = userId;
		this.userName = userName;
		this.startDate = startDate;
		this.endDate = endDate;
		this.totalDays = totalDays;
		this.totalAmount = totalAmount;
		this.tiffinId = tiffinId;
	}
	public ActiveUsers() {
		super();
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
	public int getTiffinId() {
		return tiffinId;
	}
	public void setTiffinId(int tiffinId) {
		this.tiffinId = tiffinId;
	}
	@Override
	public String toString() {
		
		return "ActiveUsers [userId=" + userId + ", userName=" + userName + ", startDate=" + startDate + ", endDate="
				+ endDate + ", totalDays=" + totalDays + ", totalAmount=" + totalAmount + ", tiffinId=" + tiffinId
				+ "]";
	}
	
}
