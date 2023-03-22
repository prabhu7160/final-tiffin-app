package com.project.dtos;

public class Email {

	private String email;
	
	public Email() {
		// TODO Auto-generated constructor stub
	}

	public Email(String email) {
		super();
		this.email = email;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	@Override
	public String toString() {
		return "Email [email=" + email + "]";
	}
}
