<?php
include("feedback.php");
$user_id=$_POST["user_id"];
$flight_id=$_POST["flight_id"];
$rating=$_POST["rating"];
$review=$_POST["review_text"];
$query=$mysqli->prepare("insert into reviews(user_id,flight_id,rating,review_text) value(?,?,?,?)");
$query->bind_param('iiis',$user_id,$flight_id,$rating,$review);
$query->execute();
$response["status"]="success";
echo json_encode($response);