package com.project.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.project.daos.UserAddressDao;
import com.project.dtos.DtoEntityConverter;
import com.project.dtos.UserAddressDto;
import com.project.entities.UserAddress;
import java.util.*;
@Transactional
@Service
public class UserAddressService {

	@Autowired
	UserAddressDao userAddressDao;
	@Autowired
	DtoEntityConverter converter;
	
	public UserAddressDto findByAddressId(int addressId) {
		UserAddress userAddress = userAddressDao.findByAddressId(addressId);
		return converter.toUserAddressDto(userAddress);
	}
	
	public UserAddressDto findByUserId(int userId) {
		UserAddress userAddress = userAddressDao.findByUserId(userId);
		if(userAddress==null) return null;
		return converter.toUserAddressDto(userAddress);
	}
	public Map<String, Object> addUserAddress(UserAddressDto dto){
		UserAddress entity = converter.toUserAddress(dto);
		entity = userAddressDao.save(entity);
		return Collections.singletonMap("InsertedId", entity.getAddressId());
	}
}
