<?php
include('connection.php');

$airplane = $_POST['airplane'];
$airline = $_POST['airline'];
$departure_airport = $_POST['departure_airport'];
$price = $_POST['price'];
$arrival_airport = $_POST['arrival_airport'];
$departure_time = $_POST['departure_time'];
$arrival_time = $_POST['arrival_time'];

$create_flight = $mysqli->prepare('insert into flights (airplane_id, departure_airport_id, arrival_airport_id, departure_date, arrival_date, price) values(?,?,?,?,?,?)');
$create_flight->bind_param('iiissi', $airplane, $departure_airport, $arrival_airport, $departure_time, $arrival_time, $price);

if($create_flight->execute()){
    $response["status"] = "Success";
    $response["message"] = "Added flight succesfully";

}else{
    $response["status"] = "Failed";
    $response["message"] = "Failed to add flight";

}
$create_flight->store_result();

$response['status'] = "success";

echo json_encode($response);




