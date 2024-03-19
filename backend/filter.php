<?php
include('connection.php');

$from_airport = $_GET['from_airport'];
$to_airport = $_GET['to_airport'];
$departure_date = $_GET['departure_date'];
$return_date = $_GET['return_date'];

if(!empty($_GET["return_date"])){
    $query = $mysqli->prepare('select * from flights where (departure_airport_id = ? and arrival_airport_id = ? and date(departure_date) = ?) or (departure_airport_id = ? and arrival_airport_id = ? and departure_date = ?) ');
    $query->bind_param('iisiis', $from_airport, $to_airport, $departure_date, $to_airport, $from_airport, $return_date);


}else{
    $query = $mysqli->prepare('select * from flights where departure_airport_id = ? and arrival_airport_id = ? and date(departure_date) = ?');
    $query->bind_param('iis', $from_airport, $to_airport, $departure_date);

}

$logString = $sql;
foreach ($_GET as $key => $value) {
    $logString = str_replace("?", "'$value'", $logString);
}
echo "SQL Query: $logString\n";



$query->execute();
$query->store_result();
$num_rows = $query->num_rows();
if($num_rows == 0) {
    $response["status"] = "No flights";
    $response["message"] = "No flights to show";
}else{
    $flights = [];
    $flights->bind_result($id, $airplane_id, $departure_airport_id, $arrival_airport_id, $departure_date, $arrival_date, $flight_status);
    while ($flights->fetch()) {
        $flight = [
            'id' => $departure_airport_id,
            'arrival_airport_id' => $arrival_airport_id,
            '$departure_date' => $departure_date,
        ];
        $flights[] = $flight;
        $response['status'] = 'success';
        $response['flights'] = $flights;
    }};

echo json_encode($response);



