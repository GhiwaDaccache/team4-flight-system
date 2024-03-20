<?php
include("messages.php");
$id=$_POST["sender_id"];
$query=$mysqli->prepare("select * from messages where sender_id=?");
$query->bind_param('i',$id);
$query->execute();
$query->bind_result($id,$chat_id,$sender_id,$message,$date);
$query->store_result();
$query->fetch();

$num_rows=$query->num_rows();
if($num_rows==0){
    $response["status"]="failed";
    $response["message"]="No messages for this user";
}
else{
    $response["status"]="success";
    $response["sender"]=$sender_id;
    $response["message"]=$message;
    $response["date"]=$date;
}

echo json_encode($response);