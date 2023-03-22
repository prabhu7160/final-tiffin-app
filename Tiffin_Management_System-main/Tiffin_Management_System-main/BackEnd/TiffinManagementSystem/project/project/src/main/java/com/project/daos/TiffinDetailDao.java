package com.project.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.entities.TiffinDetail;

public interface TiffinDetailDao extends JpaRepository<TiffinDetail, Integer> {

	TiffinDetail findByTiffinId(int tiffinId);

	List<TiffinDetail> findAll();

}
