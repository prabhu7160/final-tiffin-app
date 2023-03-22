package com.project;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ProjectApplication {

	public static void main(String[] args) {
		SpringApplication.run(ProjectApplication.class, args);
	}
	@Bean
    public CommandLineRunner demoData(UserDao repo ,PasswordEncoder passwordEncoder) {
        return args -> { 
        	User admin = repo.findByUserId(1);
        	if(admin==null) {
        		admin=new User(1,"admin","admin@gmail.com",null,"987456321","admin","111122223",null);
        		admin.setPassword(passwordEncoder.encode("admin"));
        		repo.save(admin);
        	}
        		
        };
    }
}
