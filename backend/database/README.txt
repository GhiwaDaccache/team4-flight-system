step 1: create a database manually in phpMyAdmin name it "flightagencydb"
step 2: copy whole flightagencydb.sql and paste it in the SQL section in phpMyAdmin, then click GO
step 3: refresh page, bravo now you have a database with its corresponding tables
step 4: we might want find a way to populate data in SQL for demo purposes


here are some constraints for some fields, just keep them on your mind, DO NOTT add the following SQL to database:

--ALTER TABLE `airplanes` MODIFY (`airplane_status`) ENUM('idle', 'airborne', 'landed');

--ALTER TABLE `flights` MODIFY (`flight_status`) ENUM('scheduled', 'delayed', 'canceled');

--ALTER TABLE `bookings` MODIFY (`payment_status`) ENUM('pending', 'paid', 'canceled');

--ALTER TABLE `coins_request` MODIFY (`status`) ENUM('pending', 'approved', 'rejected');


I ADDED SQL DUMP FILE:
Kindly just copy sql and paste in your phpMyAdmin to populate your database with some data