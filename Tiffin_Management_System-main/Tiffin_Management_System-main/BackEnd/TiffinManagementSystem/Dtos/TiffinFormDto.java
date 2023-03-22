package com.project.dtos;

import org.springframework.beans.BeanUtils;
import org.springframework.web.multipart.MultipartFile;

import com.project.entities.TiffinDetail;

public class TiffinFormDto 
{
	private int tiffinId;
	private String tiffinName;
	private double price;
	private MultipartFile tiffinImage;
	private String description;
	
	public TiffinFormDto() {
		
	}

	public TiffinFormDto(int tiffinId, String tiffinName, double price, MultipartFile thumbnail, String description) {
		super();
		this.tiffinId = tiffinId;
		this.tiffinName = tiffinName;
		this.price = price;
		this.tiffinImage = thumbnail;
		this.description = description;
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

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public MultipartFile getTiffinImage() {
		return tiffinImage;
	}

	public void setTiffinImage(MultipartFile thumbnail) {
		this.tiffinImage = thumbnail;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	@Override
	public String toString() {
		return "TiffinFormDto [tiffinId=" + tiffinId + ", tiffinName=" + tiffinName + ", price=" + price
				+ ", thumbnail=" + tiffinImage + ", description=" + description + "]";
	}
	
	public static TiffinDetail toEntity(TiffinFormDto dto) {
		TiffinDetail entity=new TiffinDetail();
		BeanUtils.copyProperties(dto,entity,"imageName");
		return entity;
	}
}
