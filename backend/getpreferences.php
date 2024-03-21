<?php
include("connection.php");
$id=$_POST["id"];
$query=$mysqli->prepare("select * from  user_airline_preferences where user_id=?");
$query->bind_param('i',$id);
$query->execute();
$query->store_result();
$query->bind_result($id,$user_id,$airline_id);
//i think about a statement but if some one have not email he can't enter the profile page and if he haven't preferences 
//no result will received 
$preferences=[];
while($query->fetch()){
    $preference=["id"=>$id,
    "user_id"=>$user_id,
    "airline_id"=>$airline_id];
    $preferences[]=$preference;
}

$response["status"]="success";
$response["preferences"]=$preferences;

echo json_encode($response);