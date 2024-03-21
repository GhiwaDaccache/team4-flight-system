<?php
include('connection.php');


$load_airplanes = $mysqli->prepare('select id, model from airplanes');
$load_airplanes->execute();
$load_airplanes->store_result();

$airplanes = [];
$load_airplanes->bind_result($id, $model);
while ($load_airplanes->fetch()) {
    $airplane = [
        'id' => $id,
        'model' => $model
    ];

    $airplanes[] = $airplane;
    $response['status'] = 'success';
    $response['airplanes'] = $airplanes;
};

echo json_encode($response);


