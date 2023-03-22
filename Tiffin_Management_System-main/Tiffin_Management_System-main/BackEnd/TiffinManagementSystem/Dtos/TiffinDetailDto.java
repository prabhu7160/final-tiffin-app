package com.project.dtos;

import java.sql.Blob;

public class TiffinDetailDto {

	private int tiffinId;
	private String tiffinName;
	private String tiffinImage;
	private int tiffinPrice;
	private String description;
	
	public TiffinDetailDto() {
		// TODO Auto-generated constructor stub
	}

	public TiffinDetailDto(int tiffinId, String tiffinName, String tiffinImage, int tiffinPrice, String desription) {
		super();
		this.tiffinId = tiffinId;
		this.tiffinName = tiffinName;
		this.tiffinImage = tiffinImage;
		this.tiffinPrice = tiffinPrice;
		this.description = desription;
	}

	public int getTiffinId() {
		return tiffinId;
	}

	public void setTiffinId(int tiffinId) {
		this.tiffinId = tiffinId;
	}

	public String getTiffinName() {
		return tiffinName;
	}

	public void setTiffinName(String tiffinName) {
		this.tiffinName = tiffinName;
	}

	public String getTiffinImage() {
		return tiffinImage;
	}

	public void setTiffinImage(String tiffinImage) {
		this.tiffinImage = tiffinImage;
	}

	public int getTiffinPrice() {
		return tiffinPrice;
	}

	public void setTiffinPrice(int tiffinPrice) {
		this.tiffinPrice = tiffinPrice;
	}



	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	@Override
	public String toString() {
		return "TiffinDetailsDto [tiffinId=" + tiffinId + ", tiffinName=" + tiffinName + ", tiffinImage=" + tiffinImage
				+ ", tiffinPrice=" + tiffinPrice + ", desription=" + description + "]";
	}
}
