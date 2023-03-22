package com.project.dtos;

import java.util.Date;

public class UserOrderDto {

	private int order_id;
	private int user_id;
	private Date start_date;
	private Date end_date;
	private int total_days;
	private int total_amount;
	private int tiffin_id;
	
	public UserOrderDto() {
		super();
	}

	public UserOrderDto(int order_id, int user_id, Date start_date, Date end_date, int total_days, int total_amount,
			int tiffin_id) {
		super();
		this.order_id = order_id;
		this.user_id = user_id;
		this.start_date = start_date;
		this.end_date = end_date;
		this.total_days = total_days;
		this.total_amount = total_amount;
		this.tiffin_id = tiffin_id;
	}

	public int getOrder_id() {
		return order_id;
	}

	public void setOrder_id(int order_id) {
		this.order_id = order_id;
	}

	public int getUser_id() {
		return user_id;
	}

	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}

	public Date getStart_date() {
		return start_date;
	}

	public void setStart_date(Date start_date) {
		this.start_date = start_date;
	}

	public Date getEnd_date() {
		return end_date;
	}

	public void setEnd_date(Date end_date) {
		this.end_date = end_date;
	}

	public int getTotal_days() {
		return total_days;
	}

	public void setTotal_days(int total_days) {
		this.total_days = total_days;
	}

	public int getTotal_amount() {
		return total_amount;
	}

	public void setTotal_amount(int total_amount) {
		this.total_amount = total_amount;
	}

	public int getTiffin_id() {
		return tiffin_id;
	}

	public void setTiffin_id(int tiffin_id) {
		this.tiffin_id = tiffin_id;
	}

	@Override
	public String toString() {
		return "UserOrderDto [order_id=" + order_id + ", user_id=" + user_id + ", start_date=" + start_date
				+ ", end_date=" + end_date + ", total_days=" + total_days + ", total_amount=" + total_amount
				+ ", tiffin_id=" + tiffin_id + "]";
	}
	
}
