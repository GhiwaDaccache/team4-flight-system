<?php
include('connection.php');

error_reporting(E_ALL);
ini_set('display_errors', 1);



$booking_id = (int) $_POST["booking_id"];

$sql = 'SELECT f.id AS flight_id, f.airplane_id, f.departure_date, f.arrival_date
        FROM flights f
        INNER JOIN booking_flights bf ON f.id = bf.flight_id
        WHERE bf.booking_id = ?';

$stmt = $mysqli->prepare($sql);
$stmt->bind_param('i', $booking_id);


if (!$stmt->execute()) {
    echo json_encode(['error' => 'Error fetching flight data: ' . $mysqli->error]);
    exit;
}

$stmt->store_result();
$flights = [];


$stmt->bind_result($flightId, $airplaneId, $departureDate, $arrivalDate);
while ($stmt->fetch()) {
    $flights[] = [
        'id' => $flightId,
        'airplane_id' => $airplaneId,
        'departure_date' => $departureDate,
        'arrival_date' => $arrivalDate,
    ];
}

$stmt->close();


function fetchAirplaneDetails($airplaneId, $mysqli)
{
    $sql = 'SELECT al.name AS airline, model FROM airplanes a
    INNER JOIN airlines al ON a.airline_id = al.id
    WHERE a.id = ?';

    $stmt = $mysqli->prepare($sql);
    $stmt->bind_param('i', $airplaneId);

    $stmt->execute();

    $airplane = null;
    $airline = null;
    $model = null;

    $stmt->store_result();
    $stmt->bind_result($airline, $model);
    if ($stmt->fetch()) {
        $airplane = [
            'airline' => $airline,
            'model' => $model,
        ];
    }
    $stmt->close();
    return $airplane;
}


$flightsWithAirplanes = [];
foreach ($flights as $flight) {
    $airplane = fetchAirplaneDetails($flight['airplane_id'], $mysqli);
    $flightWithPlane = array_merge($flight, $airplane);
    $flightsWithAirplanes[] = $flightWithPlane;
}


echo json_encode($flightsWithAirplanes);
