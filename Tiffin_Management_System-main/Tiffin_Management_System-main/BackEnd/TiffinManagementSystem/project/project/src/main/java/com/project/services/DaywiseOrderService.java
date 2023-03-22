package com.project.services;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.ZoneId;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;

import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.daos.DaywiseOrderDao;
import com.project.daos.OrderDao;
import com.project.daos.TiffinDetailDao;
import com.project.daos.UserAddressDao;
import com.project.daos.UserDao;
import com.project.dtos.ActiveUsers;
import com.project.dtos.AssignDeliveryBoy;
import com.project.dtos.DaywiseOrderDto;
import com.project.dtos.DtoEntityConverter;
import com.project.dtos.OrderDto;
import com.project.dtos.OrderTiffinDetailsDto;
import com.project.dtos.TiffinDetailDto;
import com.project.dtos.UserDto;
import com.project.entities.DaywiseOrder;
import com.project.entities.Order;
import com.project.entities.TiffinDetail;
import com.project.entities.User;
import com.project.entities.UserAddress;

@Service
@Transactional
public class DaywiseOrderService {

	@Autowired
	DaywiseOrderDao daywiseOrderDao;
	@Autowired
	DtoEntityConverter converter;
	@Autowired
	private OrderDao orderdao;
	@Autowired
	private UserDao userdao;
	@Autowired
	private TiffinDetailDao tiffindao;
	@Autowired
	private UserAddressDao userAddressdao;

	public DaywiseOrderDto findByDoId(int doId) {
		DaywiseOrder dayWiseOrder = daywiseOrderDao.findByDoId(doId);
		System.out.println(converter.toDaywiseOrderDto(dayWiseOrder));
		return converter.toDaywiseOrderDto(dayWiseOrder);
	}

	public DaywiseOrderDto addDaywise(DaywiseOrderDto daywiseorderDto) {
		DaywiseOrder daywiseOrder = converter.dayWiseOrderDTOtoDayWiseOrder(daywiseorderDto);
		daywiseOrderDao.save(daywiseOrder);
		return converter.toDaywiseOrderDto(daywiseOrder);
	}

	public List<DaywiseOrderDto> GetALLOrders() {
		List<DaywiseOrder> dayw = daywiseOrderDao.findAll();
		List<DaywiseOrderDto> x = new ArrayList<>();
		for (DaywiseOrder d : dayw) {
			System.out.println(d.getOrder().getUser().getAadharNo());
			x.add(converter.toDaywiseOrderDto(d));
		}
		return x;
	}

	public List<DaywiseOrderDto> addDaywiseOrder() {
		List<Order> orders = orderdao.findAll();
		List<DaywiseOrder> daywiselist = new ArrayList<DaywiseOrder>();
		List<DaywiseOrderDto> daywisedtolist = new ArrayList<DaywiseOrderDto>();
		daywiseOrderDao.deleteAll();

		for (Order o : orders) {
			// int doId, Date date, String session, int requirement, String status, Order
			// order,
			// User deliveryBoy
			Date date = new Date();
			System.out.println(o.getEndDate() + "  +  " + date.getHours());
			if (o.getEndDate().compareTo(date) >= 1) {

				if (date.getHours() < 12) {
					System.out.println(o.getUser());
					DaywiseOrder ox = new DaywiseOrder(date, "morning", 1, "pending", new Order(o.getOrderId()),
							o.getUser());
					daywiselist.add(ox);
					daywisedtolist.add(converter.toDaywiseOrderDto(ox));
				} else {
//				daywiseOrderDao.deleteAll();

					DaywiseOrder ox = new DaywiseOrder(date, "night", 1, "pending", new Order(o.getOrderId()),
							o.getUser());
					daywiselist.add(ox);
					daywisedtolist.add(converter.toDaywiseOrderDto(ox));
				}
			}
		}
		daywiseOrderDao.saveAll(daywiselist);
		return daywisedtolist;
	}

	public List<OrderTiffinDetailsDto> Countpending() {
//	long count=daywiseOrderDao.count();
		List<DaywiseOrder> x = daywiseOrderDao.findAll();
		HashMap<Integer, Integer> count = new HashMap<>();

		for (DaywiseOrder d : x) {
			System.out.println(d.getStatus());
			if (d.getStatus().equals("pending")) {
				Order o = d.getOrder();
				int tiffin_id = o.getTiffinDetails().getTiffinId();
				count.put(tiffin_id, count.getOrDefault(tiffin_id, 0) + 1);
			}

		}
		List<OrderTiffinDetailsDto> list = new ArrayList<OrderTiffinDetailsDto>();
		for (Integer i : count.keySet()) {
			int c = count.get(i);
			TiffinDetail t = tiffindao.findByTiffinId(i);
			OrderTiffinDetailsDto ot = new OrderTiffinDetailsDto(t.getTiffinName(), c);
			list.add(ot);
		}
		System.out.println(list);

		return list;
	}

	public List<OrderTiffinDetailsDto> CountDispatched() {
//	long count=daywiseOrderDao.count();
		List<DaywiseOrder> x = daywiseOrderDao.findAll();
		HashMap<Integer, Integer> count = new HashMap<>();

		for (DaywiseOrder d : x) {
			System.out.println(d.getStatus());
			if (d.getStatus().equals("dispatched")) {
				Order o = d.getOrder();
				int tiffin_id = o.getTiffinDetails().getTiffinId();
				count.put(tiffin_id, count.getOrDefault(tiffin_id, 0) + 1);
			}

		}
		List<OrderTiffinDetailsDto> list = new ArrayList<OrderTiffinDetailsDto>();
		for (Integer i : count.keySet()) {
			int c = count.get(i);
			TiffinDetail t = tiffindao.findByTiffinId(i);
			OrderTiffinDetailsDto ot = new OrderTiffinDetailsDto(t.getTiffinName(), c);
			list.add(ot);
		}

		System.out.println(list + "   ssja");

		return list;
	}

	public List<AssignDeliveryBoy> TotaltodaysPendingOrderList() {

		List<DaywiseOrder> daywiseorder = daywiseOrderDao.findAll();
		List<AssignDeliveryBoy> assignd = new ArrayList<AssignDeliveryBoy>();
		for (DaywiseOrder d : daywiseorder) {
			if (d.getStatus().equals("pending")) {
		UserAddress ud=		userAddressdao.findByUserId(d.getOrder().getUser().getUserId());
				
				AssignDeliveryBoy a = new AssignDeliveryBoy(d.getDoId(),
						d.getOrder().getUser().getUserName(),
						d.getOrder().getOrderId(), ud.getAddressLine(),
						ud.getDeliveryAddress().getDeliveryArea(),
						ud.getDeliveryAddress().getCity(),
						ud.getDeliveryAddress().getPinCode());
				System.out.println(a.getDo_id());
				assignd.add(a);
			}

		}
//	System.out.println(assignd);
		return assignd;
	}

	public List<UserDto> getDeliveryBoys() {
		List<User> users = userdao.findAll();
		List<UserDto> deliveryBoys = new ArrayList<>();
		for (User u : users) {
			if (u.getRole().equals("delivery")) {
				deliveryBoys.add(converter.toUserDto(u));
			}
		}
		return deliveryBoys;
	}

	public String DispatchOrder(String userId, String do_id) {
		int userid = Integer.parseInt(userId);
		int doId = Integer.parseInt(do_id);
		DaywiseOrder d = daywiseOrderDao.findByDoId(doId);

		d.setDeliveryBoy(userdao.findByUserId(userid));
		d.setStatus("dispatched");
		daywiseOrderDao.save(d);
		return "successfully done";
	}

	public List<AssignDeliveryBoy> getDeliveryDetailsforDeliveryBoy(int userId) {
		List<DaywiseOrder> dayorders = daywiseOrderDao.findAll();
		List<AssignDeliveryBoy> dblist = new ArrayList<AssignDeliveryBoy>();
		for (DaywiseOrder d : dayorders) {
			if (d.getDeliveryBoy().getUserId() == userId  && d.getStatus().equals("dispatched") ) {
UserAddress ud=		userAddressdao.findByUserId(d.getOrder().getUser().getUserId());
				
				AssignDeliveryBoy a = new AssignDeliveryBoy(d.getDoId(),
						d.getOrder().getUser().getUserName(),
						d.getOrder().getOrderId(), ud.getAddressLine(),
						ud.getDeliveryAddress().getDeliveryArea(),
						ud.getDeliveryAddress().getCity(),
						ud.getDeliveryAddress().getPinCode());
				System.out.println(a.getDo_id());
				dblist.add(a);
			}
		}
		return dblist;

	}
	public int DispatchedToDelivered(int do_id) {
		DaywiseOrder d=daywiseOrderDao.findByDoId(do_id);
		d.setStatus("Delivered");
		return 1;
	}
	public List<AssignDeliveryBoy> TotaltodaysDispatchedOrders() {

		List<DaywiseOrder> daywiseorder = daywiseOrderDao.findAll();
		List<AssignDeliveryBoy> assignd = new ArrayList<AssignDeliveryBoy>();
//		System.out.println(daywiseorder);
		for (DaywiseOrder d : daywiseorder) {
			if (d.getStatus().equals("dispatched")) {
	UserAddress ud=		userAddressdao.findByUserId(d.getOrder().getUser().getUserId());
				
				AssignDeliveryBoy a = new AssignDeliveryBoy(d.getDoId(),
						d.getOrder().getUser().getUserName(),
						d.getOrder().getOrderId(), ud.getAddressLine(),
						ud.getDeliveryAddress().getDeliveryArea(),
						ud.getDeliveryAddress().getCity(),
						ud.getDeliveryAddress().getPinCode());
				System.out.println(a.getDo_id());
				assignd.add(a);
			}

		}
	System.out.println(assignd);
		return assignd;
	}
	public List<OrderTiffinDetailsDto> CountDelivered() {
//		long count=daywiseOrderDao.count();
			List<DaywiseOrder> x = daywiseOrderDao.findAll();
			HashMap<Integer, Integer> count = new HashMap<>();

			for (DaywiseOrder d : x) {
				System.out.println(d.getStatus());
				if (d.getStatus().equals("Delivered")) {
					Order o = d.getOrder();
					int tiffin_id = o.getTiffinDetails().getTiffinId();
					count.put(tiffin_id, count.getOrDefault(tiffin_id, 0) + 1);
				}

			}
			List<OrderTiffinDetailsDto> list = new ArrayList<OrderTiffinDetailsDto>();
			for (Integer i : count.keySet()) {
				int c = count.get(i);
				TiffinDetail t = tiffindao.findByTiffinId(i);
				OrderTiffinDetailsDto ot = new OrderTiffinDetailsDto(t.getTiffinName(), c);
				list.add(ot);
			}

//			System.out.println(list + "   ssja");

			return list;
		}
	
	public List<AssignDeliveryBoy> TotaltodaysDeliveredOrders(){
		List<DaywiseOrder> daywiseorder = daywiseOrderDao.findAll();
		List<AssignDeliveryBoy> assignd = new ArrayList<AssignDeliveryBoy>();
		for (DaywiseOrder d : daywiseorder) {
			if (d.getStatus().equals("Delivered")) {
UserAddress ud=		userAddressdao.findByUserId(d.getOrder().getUser().getUserId());
				
				AssignDeliveryBoy a = new AssignDeliveryBoy(d.getDoId(),
						d.getOrder().getUser().getUserName(),
						d.getOrder().getOrderId(), ud.getAddressLine(),
						ud.getDeliveryAddress().getDeliveryArea(),
						ud.getDeliveryAddress().getCity(),
						ud.getDeliveryAddress().getPinCode());
				System.out.println(a.getDo_id());
				assignd.add(a);
			}

		}
	System.out.println(assignd);
		return assignd;
	}
	
	public List<ActiveUsers> getAllActiveUsers(){
		List<Order> orders = orderdao.findAll();
		List<ActiveUsers> activeusers=new ArrayList<ActiveUsers>();

		for (Order o : orders) {
		
			Date date = new Date();
		System.out.println(o.getOrderId()+""+o.getEndDate().compareTo(date));
			if (o.getEndDate().compareTo(date) >= 0) {
			
					 
					activeusers.add( new ActiveUsers(o.getUser().getUserId(),o.getUser().getUserName(),o.getStartDate(),o.getEndDate(),o.getTotalDays(),
							o.getTotalAmount(),o.getTiffinDetails().getTiffinId()));
			
			}
		}
	return activeusers;
		
	}
 }
