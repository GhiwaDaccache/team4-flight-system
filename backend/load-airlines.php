<?php
include('connection.php');


$load_airlines = $mysqli->prepare('select id, name from airlines');
$load_airlines->execute();
$load_airlines->store_result();

$airlines = [];
$load_airlines->bind_result($id, $name);
while ($load_airlines->fetch()) {
    $airline = [
        'id' => $id,
        'name' => $name
    ];

    $airlines[] = $airline;
    $response['status'] = 'success';
    $response['airlines'] = $airlines;
};

echo json_encode($response);


