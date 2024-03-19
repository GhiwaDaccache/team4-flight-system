<?php
include('connection.php');

$from_airport = $_GET['from_airport'];
$to_airport = $_GET['to_airport'];
$departure_date = $_GET['departure_date'];
$return_date = $_GET['return_date'];

if(!empty($_GET["return_date"])){
    $query = $mysqli->prepare('SELECT distinct * FROM flights f right Join airports a on a.id=f.arrival_airport_id or a.id=departure_airport_id WHERE (departure_airport_id = ? AND arrival_airport_id = ? AND DATE(departure_date) = ?) OR (departure_airport_id = ? AND arrival_airport_id = ? AND departure_date = ?)');
    $query->bind_param('iisiis', $from_airport, $to_airport, $departure_date, $to_airport, $from_airport, $return_date);
}else{
    $query = $mysqli->prepare('SELECT distinct * from flights f right join airports a on a.id=f.arrival_airport_id or a.id=departure_airport_id where departure_airport_id = ? and arrival_airport_id = ? and date(departure_date) = ?');
    $query->bind_param('iis', $from_airport, $to_airport, $departure_date);

}



$query->execute();


$query->store_result();
$num_rows = $query->num_rows();
if($num_rows == 0) {
    $response["status"] = "No flights";
    $response["message"] = "No flights to show";
}else{
    $flights = [];
    $query->bind_result($flight_id, $airplane_id, $departure_airport_id, $arrival_airport_id, $departure_date, $arrival_date, $flight_status, $price, $airport_id, $code, $name, $city, $country,);
    while ($query->fetch()) {
        $flight = [
            'id' => $flight_id,
            'arrival_airport_id' => $arrival_airport_id,
            'departure_date' => $departure_date,
            'arrival_date' => $arrival_date,
            'price' => $price,
            'code' => $code,
            'country' => $country
        ];
        $flights[] = $flight;
        $response['status'] = 'success';
        $response['flights'] = $flights;
    }};

echo json_encode($response);




