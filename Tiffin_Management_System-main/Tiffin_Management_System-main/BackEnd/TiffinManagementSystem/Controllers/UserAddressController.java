package com.project.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.project.dtos.Response;
import com.project.dtos.UserAddressDto;
import com.project.services.UserAddressService;

@CrossOrigin(origins = "*")
@RestController
public class UserAddressController {

	@Autowired
	UserAddressService userAddressService;
	
	@GetMapping("/userAddress/{id}")
	public ResponseEntity<?> displayUserAddressById(@PathVariable("id") int id) {
		
		UserAddressDto userAddressDto = userAddressService.findByAddressId(id);
		return Response.success(userAddressDto);
	}
	
	@GetMapping("/userAddress/user/{id}")
	public ResponseEntity<?> displayUserUserById(@PathVariable("id") int id) {
		System.out.println(id);
		UserAddressDto userAddressDto = userAddressService.findByUserId(id);
		if(userAddressDto==null) return Response.error("Please add Address");
		return Response.success(userAddressDto);
	}
	@PostMapping("/userAddress/add")
	public ResponseEntity<?> addUserAddress(@RequestBody UserAddressDto dto){
		System.out.println(dto.getLocationId()+"  sas");
		Map<String, Object> result = userAddressService.addUserAddress(dto);
		return Response.success(result);
	}
}
