<?php
include('connection.php');

$query = $mysqli->prepare('select f.id, f.departure_date, f.arrival_date, a.code, a.city, a2.code, a2.city from flights f join airports a on a.id=departure_airport_id join airports a2 on a2.id=arrival_airport_id order by departure_date DESC');
$query->execute();
$query->store_result();

$flights = [];
$query->bind_result($flight_id, $departure_date, $arrival_date, $departure_code, $departure_city, $arrival_code, $arrival_city);
while ($query->fetch()) {
    $flight = [
        'id' => $flight_id,
        'departure_date' => $departure_date,
        'arrival_date' => $arrival_date,
        'departure_code' => $departure_code,
        'departure_city' => $departure_city,
        'arrival_code' => $arrival_code,
        'arrival_city' => $arrival_city
    ];
    $flights[] = $flight;
    $response['status'] = 'success';
    $response['flights'] = $flights;
    };

echo json_encode($response);