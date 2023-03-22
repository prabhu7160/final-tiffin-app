package com.project.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.entities.DaywiseOrder;
import com.project.entities.User;

public interface DaywiseOrderDao extends JpaRepository<DaywiseOrder, Integer>{
	

	DaywiseOrder findByDoId(int doId);

	List<DaywiseOrder> findByDeliveryBoy(User deliveryboy);

}
