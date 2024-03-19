<?php
<<<<<<< HEAD
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
=======

header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
>>>>>>> f08869cdadc280b44b4a3e7545141ed44c789138

$host = "localhost";
$db_user = "root";
$db_pass = null;
<<<<<<< HEAD
$db_name = "flight_website";
=======
$db_name = "flightagencydb";
>>>>>>> f08869cdadc280b44b4a3e7545141ed44c789138

$mysqli = new mysqli($host, $db_user, $db_pass, $db_name);

if ($mysqli->connect_error) {
    die("Connection failed: " . $mysqli->connect_error);
}




