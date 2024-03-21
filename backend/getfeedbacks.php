<?php 
include("connection.php");
$query=$mysqli->prepare("select * from reviews");
$query->execute();
$query->store_result();
$query->bind_result($id,$user_id,$flight_id,$rating,$review_text,$date);
$num_rows=$query->num_rows();
$reviews=[];

while($query->fetch()){
    $review=["id"=>$id,
    "user_id"=>$user_id,
    "flight_id"=>$flight_id,
    "rating"=>$rating,
    "review_text"=>$review_text,
    "date"=>$date];
    $reviews[]=$review;
}
$response["status"]="success";
$response["reviews"]=$reviews;
echo json_encode($response);