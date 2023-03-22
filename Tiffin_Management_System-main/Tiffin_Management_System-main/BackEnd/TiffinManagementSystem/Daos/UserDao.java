package com.project.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.entities.User;

public interface UserDao extends JpaRepository<User, Integer> {

	User findByUserId(int userId);
	User findByEmail(String email);
}
