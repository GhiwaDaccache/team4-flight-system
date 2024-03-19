<?php
include('connection.php');


$load_filter = $mysqli->prepare('select id, code, country from airports');
$load_filter->execute();
$load_filter->store_result();

$airports = [];
$load_filter->bind_result($id, $code, $country);
while ($load_filter->fetch()) {
    $airport = [
        'id' => $id,
        'code' => $code,
        'country' => $country,
    ];
    $airports[] = $airport;
    $response['status'] = 'success';
    $response['airports'] = $airports;
};

echo json_encode($response);


