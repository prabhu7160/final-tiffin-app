CREATE TABLE `tiffin_details` (
	`tiffin_id` int NOT NULL AUTO_INCREMENT,
	`tiffin_name` varchar(255) NOT NULL,
	`tiffin_image` blob,
	`tiffin_price` int NOT NULL,
	`description` varchar(500) NOT NULL,
	PRIMARY KEY (`tiffin_id`)
);

CREATE TABLE `users` (
	`user_id` int NOT NULL AUTO_INCREMENT,
	`user_name` varchar(255) NOT NULL,
	`email` varchar(255) NOT NULL UNIQUE,
	`password` varchar(255) NOT NULL,
	`phone` varchar(10) NOT NULL UNIQUE,
	`role` varchar(25) NOT NULL,
	`aadhar_no` varchar(12) NOT NULL UNIQUE,
	PRIMARY KEY (`user_id`)
);

CREATE TABLE `user_address` (
	`address_id` int NOT NULL AUTO_INCREMENT,
	`user_id` int NOT NULL,
	`address_line1` varchar(255) NOT NULL,
	`location_id` int NOT NULL,
	PRIMARY KEY (`address_id`)
);

CREATE TABLE `orders` (
	`order_id` int NOT NULL AUTO_INCREMENT,
	`user_id` int NOT NULL,
	`start_date` DATE NOT NULL,
	`end_date` DATE NOT NULL,
	`total_days` int NOT NULL,
	`total_amount` int NOT NULL,
	`tiffin_id` int NOT NULL,
	PRIMARY KEY (`order_id`)
);

CREATE TABLE `payment` (
	`transaction_id` int NOT NULL AUTO_INCREMENT,
	`order_id` int NOT NULL,
	`payment_type` varchar(50) NOT NULL,
	`total_payment` int NOT NULL,
	`payment_status` varchar(50) NOT NULL,
	`payment_time` timestamp default current_timestamp,
	PRIMARY KEY (`transaction_id`)
);

CREATE TABLE `delivery_address` (
	`location_id` int NOT NULL AUTO_INCREMENT,
	`delivery_area` varchar(255) NOT NULL,
	`city` varchar(255) NOT NULL,
	`pin_code` int NOT NULL,
	PRIMARY KEY (`location_id`)
);

CREATE TABLE `daywise_orders` (
	`do_id` int NOT NULL AUTO_INCREMENT,
	`order_id` int NOT NULL,
	`date` Date NOT NULL,
	`session` varchar(10) NOT NULL,
	`requirement` int NOT NULL,
	`status` varchar(20) NOT NULL,
	`delivery_boy_id` int NOT NULL,
	PRIMARY KEY (`do_id`)
);

ALTER TABLE `user_address` ADD CONSTRAINT `user_address_fk0` FOREIGN KEY (`user_id`) REFERENCES `users`(`user_id`);

ALTER TABLE `user_address` ADD CONSTRAINT `user_address_fk1` FOREIGN KEY (`location_id`) REFERENCES `delivery_address`(`location_id`);

ALTER TABLE `orders` ADD CONSTRAINT `orders_fk0` FOREIGN KEY (`user_id`) REFERENCES `users`(`user_id`);

ALTER TABLE `orders` ADD CONSTRAINT `orders_fk1` FOREIGN KEY (`tiffin_id`) REFERENCES `tiffin_details`(`tiffin_id`);

ALTER TABLE `payment` ADD CONSTRAINT `payment_fk0` FOREIGN KEY (`order_id`) REFERENCES `orders`(`order_id`);

ALTER TABLE `daywise_orders` ADD CONSTRAINT `daywise_orders_fk0` FOREIGN KEY (`delivery_boy_id`) REFERENCES `users`(`user_id`);

ALTER TABLE `daywise_orders` ADD CONSTRAINT `daywise_orders_fk1` FOREIGN KEY (`order_id`) REFERENCES `orders`(`order_id`);





