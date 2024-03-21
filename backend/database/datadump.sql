INSERT INTO airlines (name)
VALUES ('Airline A'),
       ('Airline B'),
       ('Airline C');

INSERT INTO airplanes (model, airline_id, seats_capacity, airplane_status)
VALUES ('Boeing 737-800', 1, 189, 'idle'),
       ('Airbus A320', 2, 180, 'idle'),
       ('Embraer 190', 3, 100, 'idle');

INSERT INTO airports (code, name, city, country)
VALUES ('LAX', 'Los Angeles International Airport', 'Los Angeles', 'USA'),
       ('JFK', 'John F. Kennedy International Airport', 'New York City', 'USA'),
       ('LHR', 'Heathrow Airport', 'London', 'UK'),
       ('CDG', 'Charles de Gaulle Airport', 'Paris', 'France'),
       ('HND', 'Tokyo Haneda Airport', 'Tokyo', 'Japan'),
       ('SIN', 'Singapore Changi Airport', 'Singapore', 'Singapore'),
       ('DXB', 'Dubai International Airport', 'Dubai', 'United Arab Emirates'),
       ('FRA', 'Frankfurt Airport', 'Frankfurt', 'Germany'),
       ('AMS', 'Amsterdam Airport Schiphol', 'Amsterdam', 'Netherlands'),
       ('PEK', 'Beijing Capital International Airport', 'Beijing', 'China');


INSERT INTO flights (airplane_id, departure_airport_id, arrival_airport_id, departure_date, arrival_date, flight_status, price)
VALUES (1, 1, 2, '2024-03-25 10:00:00', '2024-03-25 12:00:00', 'scheduled', 200),
       (2, 2, 3, '2024-03-27 15:00:00', '2024-03-27 17:30:00', 'scheduled', 150),
       (3, 3, 1, '2024-03-29 08:00:00', '2024-03-29 10:00:00', 'scheduled', 300);

INSERT INTO users (first_name, last_name, email, password_hash, passport_number, phone_number, date_of_birth, coins)
VALUES ('John', 'Doe', 'johndoe@example.com', 'HASHED_PASSWORD', '1234567890', '+1234567890', '1990-01-01', 100),
       ('Jane', 'Smith', 'janesmith@example.com', 'HASHED_PASSWORD', '9876543210', '+9876543210', '1995-07-15', 50),
       ('Michael', 'Johnson', 'michaeljohnson@example.com', 'HASHED_PASSWORD', '0012345678', '+441234567890', '1985-12-24', 20);

INSERT INTO bookings (user_id, booking_date, payment_status, economy_class_price, business_class_price)
VALUES (1, NOW(), 'pending', 200.00, 300.00);

INSERT INTO booking_flights (booking_id, flight_id)
VALUES (1, 1),
       (1, 2);

INSERT INTO admins (user_id) VALUES (1);

INSERT INTO chats (user_id,admin_id,is_open) VALUES (1,1,1); 
INSERT INTO chats (user_id,admin_id,is_open) VALUES (2,1,0); 
INSERT INTO chats (user_id,admin_id,is_open) VALUES (3,1,1); 


INSERT INTO messages (chat_id, sender_id, message_text, sent_at)
VALUES (1, 2, "Hello from user 2!", NOW()),
       (1, 3, "This is message 1 from user 3.", NOW() + INTERVAL 1 MINUTE),
       (1, 2, "This is a reply from user 2.", NOW() + INTERVAL 2 MINUTE),
       (2, 1, "Test message 1 for chat 2", NOW() + INTERVAL 3 MINUTE),
       (2, 3, "Another message for chat 2", NOW() + INTERVAL 4 MINUTE),
       (1, 3, "User 3 sent another message!", NOW() + INTERVAL 5 MINUTE),
       (1, 1, "User 1 joins the conversation!", NOW() + INTERVAL 6 MINUTE);