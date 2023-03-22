package com.project.dtos;

public class OrderTiffinDetailsDto {

	private String Tiffinname;
	private int count;
	
	
	public OrderTiffinDetailsDto() {
		super();
	}
	public OrderTiffinDetailsDto(String tiffinname, int count) {
		super();
		Tiffinname = tiffinname;
		this.count = count;
	}
	public String getTiffinname() {
		return Tiffinname;
	}
	public void setTiffinname(String tiffinname) {
		Tiffinname = tiffinname;
	}
	public int getCount() {
		return count;
	}
	public void setCount(int count) {
		this.count = count;
	}
	@Override
	public String toString() {
		return "OrderTiffinDetails [Tiffinname=" + Tiffinname + ", count=" + count + "]";
	}
	
}
