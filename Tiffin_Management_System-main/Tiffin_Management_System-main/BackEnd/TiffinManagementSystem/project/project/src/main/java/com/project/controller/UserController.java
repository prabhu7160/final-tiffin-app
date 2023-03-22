package com.project.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.node.ObjectNode;
import com.project.dtos.Credential;
import com.project.dtos.Response;
import com.project.dtos.UserDto;
import com.project.services.UserService;

@CrossOrigin(origins = "*")
@RestController
public class UserController {

	@Autowired
	private UserService userService;

	@PostMapping("/user/{id}")
	public ResponseEntity<?> displayUserById(@PathVariable("id") int id) {
		UserDto userDto = userService.findUserById(id);
		return Response.success(userDto);
	}
	
	@PostMapping("/user/email")
	public ResponseEntity<?> Signin(@RequestBody Credential cred) {
		UserDto userDto = userService.findUserByEmailAndPassword(cred);
		if(userDto==null) Response.error("incorrect username and password");
		return Response.success(userDto);
	}
	@PostMapping("/signup/users")
	public ResponseEntity<?> Signup(@RequestBody UserDto userdto){
		UserDto result = userService.AddUser(userdto);
		if(result==null)  return Response.error("Something wrong happened");
		return Response.success(result);
		
	}
	@PostMapping("/DeliveryBoys")
	public ResponseEntity<?> findalldeliveryBoys(){
		return Response.success(userService.DeliveryBoysList());
	}
	@PostMapping("/DeliveryBoys/Delete")
	public ResponseEntity<?> deleteDeliveryboy(@RequestBody ObjectNode objectNode){
	
int id=Integer.parseInt(objectNode.get("userId").asText());
System.out.println(id);
return Response.success(userService.DeleteUser(id));
	}
	@GetMapping("/CustomerList")
	public ResponseEntity<?> getAllCustomers(){
	
		return Response.success(userService.getAllCustomers());
	}
@PutMapping("/user/edit")
	   public ResponseEntity<?> editUser(@RequestBody UserDto dto){
	       Map<String, Object> result = userService.editUser(dto.getUserId(), dto);
	       return Response.success(result);
	   }
}

