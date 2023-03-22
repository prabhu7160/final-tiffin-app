package com.project.controller;

import java.text.ParseException;
import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.node.ObjectNode;
import com.project.dtos.DaywiseOrderDto;
import com.project.dtos.DtoEntityConverter;
import com.project.dtos.Response;
import com.project.entities.DaywiseOrder;
import com.project.services.DaywiseOrderService;

@CrossOrigin
@RestController
public class DaywiseOrderController {

	@Autowired
private	DaywiseOrderService daywiseOrderService;
	
	@Autowired
	private DtoEntityConverter converter;
	
	@GetMapping("/daywiseOrder/{id}")
	public ResponseEntity<?> displayDaywiseOrders(@PathVariable("id") int id) {
		DaywiseOrderDto daywiseOrderDto = daywiseOrderService.findByDoId(id);
		return Response.success(daywiseOrderDto);
	}

@PostMapping("/daywiseOrder/addOrder")
public ResponseEntity<?> Addorder(@RequestBody DaywiseOrderDto daywiseorder){
	
	DaywiseOrderDto daywiseOrderdto=daywiseOrderService.addDaywise(daywiseorder);
	return Response.success(daywiseOrderdto);
	
}
@PostMapping("/daywiseOrder/addallorders")
public ResponseEntity<?> Addall(){
	return Response.success(daywiseOrderService.addDaywiseOrder());
}
@PostMapping("/daywiseOrder/getAll")
public ResponseEntity<?> getAll(){
	return Response.success(daywiseOrderService.GetALLOrders());
}
@PostMapping("/daywiseOrder/countpending")
public ResponseEntity<?> getpendingCount(){
//	HashMap<Integer, V>
	return Response.success(daywiseOrderService.Countpending());
}
@PostMapping("/daywiseOrder/countDispatched")
public ResponseEntity<?> getDispatched(){
//	HashMap<Integer, V>
	return Response.success(daywiseOrderService.CountDispatched());
}
@PostMapping("/daywiseOrder/countDelivered")
public ResponseEntity<?> getDelivered(){
//	HashMap<Integer, V>
	return Response.success(daywiseOrderService.CountDelivered());
}

@PostMapping("/daywiseOrder/ListOfOrders")
public ResponseEntity<?> listdes(){
	return Response.success(daywiseOrderService.TotaltodaysPendingOrderList());
}
@PostMapping("/daywiseOrder/ListOfDispatched")
public ResponseEntity<?> listDispatched(){
	return Response.success(daywiseOrderService.TotaltodaysDispatchedOrders());
}
@PostMapping("/daywiseOrder/ListOfDelivered")
public ResponseEntity<?> listDelivered(){
	return Response.success(daywiseOrderService.TotaltodaysDeliveredOrders());
}
@PostMapping("/daywiseOrder/DeliveryBoysList")
public ResponseEntity<?> DeliveryBoysList(){
	return Response.success(daywiseOrderService.getDeliveryBoys());
}
//http://localhost:8082/daywiseOrder/dispatchOrder
@PostMapping("/daywiseOrder/dispatchOrder")
public ResponseEntity<?> dispatchOrders(@RequestBody ObjectNode objectNode){
	System.out.println("helo");
	String userId=objectNode.get("userId").asText();
	String Do_id = objectNode.get("do_id").asText();
	System.out.println("doid "+userId);
	return Response.success(daywiseOrderService.DispatchOrder(userId, Do_id));

	
}
@PostMapping("/deliverBoy/orders")
public ResponseEntity<?> getAllTodaysDeliveryDeliveryBoy(@RequestBody ObjectNode objectNode){
	int userId=Integer.parseInt(objectNode.get("userId").asText());
	System.out.println("userId  "+userId);
	return Response.success(daywiseOrderService.getDeliveryDetailsforDeliveryBoy(userId));
}
@PostMapping("/deliveryBoy/Delivered")
public ResponseEntity<?> makeitDelivered(@RequestBody ObjectNode objectNode){
	int do_id=Integer.parseInt(objectNode.get("do_id").asText());
	
	return Response.success(daywiseOrderService.DispatchedToDelivered(do_id));
}
@PostMapping("/ActiveCutomers")
public ResponseEntity<?> ActiveCutomersList(){
	return Response.success(daywiseOrderService.getAllActiveUsers());
}
}
