CREATE TABLE `admins` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `user_id` int
);

CREATE TABLE `users` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `first_name` varchar(100),
  `last_name` varchar(100),
  `email` varchar(100) UNIQUE,
  `password_hash` varchar(255),
  `passport_number` varchar(255),
  `phone_number` varchar(100),
  `date_of_birth` date,
  `coins` float
);

CREATE TABLE `user_airline_preferences` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `user_id` int,
  `airline_id` int
);

CREATE TABLE `airlines` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(100),
  `logo_url` varchar(255)
);

CREATE TABLE `airports` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `code` varchar(100),
  `name` varchar(100),
  `city` varchar(100),
  `country` varchar(100)
);

CREATE TABLE `airplanes` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `model` varchar(100),
  `airline_id` int,
  `seats_capacity` int,
  `airplane_status` varchar(100)
);

CREATE TABLE `flights` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `airplane_id` int,
  `departure_airport_id` int,
  `arrival_airport_id` int,
  `departure_date` datetime,
  `arrival_date` datetime,
  `flight_status` varchar(100)
);

CREATE TABLE `booking_flights` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `booking_id` int,
  `flight_id` int
);

CREATE TABLE `bookings` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `user_id` int,
  `booking_date` datetime,
  `payment_status` varchar(100),
  `economy_class_price` float,
  `business_class_price` float
);

CREATE TABLE `reviews` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `user_id` int,
  `flight_id` int,
  `rating` int,
  `review_text` varchar(255),
  `date_submitted` datetime
);

CREATE TABLE `coins_request` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `user_id` int,
  `requested_amount` float,
  `date_requested` datetime,
  `status` varchar(100)
);

CREATE TABLE `chats` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `user_id` int,
  `admin_id` int,
  `is_open` boolean
);

CREATE TABLE `messages` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `chat_id` int,
  `sender_id` int,
  `message_text` varchar(255),
  `sent_at` datetime
);

ALTER TABLE `admins` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

ALTER TABLE `user_airline_preferences` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

ALTER TABLE `user_airline_preferences` ADD FOREIGN KEY (`airline_id`) REFERENCES `airlines` (`id`);

ALTER TABLE `airplanes` ADD FOREIGN KEY (`airline_id`) REFERENCES `airlines` (`id`);

ALTER TABLE `flights` ADD FOREIGN KEY (`airplane_id`) REFERENCES `airplanes` (`id`);

ALTER TABLE `flights` ADD FOREIGN KEY (`departure_airport_id`) REFERENCES `airports` (`id`);

ALTER TABLE `flights` ADD FOREIGN KEY (`arrival_airport_id`) REFERENCES `airports` (`id`);

ALTER TABLE `booking_flights` ADD FOREIGN KEY (`booking_id`) REFERENCES `bookings` (`id`);

ALTER TABLE `booking_flights` ADD FOREIGN KEY (`flight_id`) REFERENCES `flights` (`id`);

ALTER TABLE `bookings` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

ALTER TABLE `reviews` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

ALTER TABLE `reviews` ADD FOREIGN KEY (`flight_id`) REFERENCES `flights` (`id`);

ALTER TABLE `coins_request` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

ALTER TABLE `chats` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

ALTER TABLE `chats` ADD FOREIGN KEY (`admin_id`) REFERENCES `admins` (`id`);

ALTER TABLE `messages` ADD FOREIGN KEY (`chat_id`) REFERENCES `chats` (`id`);

ALTER TABLE `messages` ADD FOREIGN KEY (`sender_id`) REFERENCES `users` (`id`);

ALTER TABLE `flights` ADD price int;