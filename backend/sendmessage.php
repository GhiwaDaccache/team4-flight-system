<?php
include("messages.php");

$chat_id=$_POST["chat_id"];
$sender_id=$_POST["sender_id"];
$message=$_POST["message"];
$query=$mysqli->prepare("insert into messages(chat_id,sender_id,message_text) value(?,?,?)");
$query->bind_param('sss',$chat_id,$sender_id,$message);
$query->execute();
$response["response"]="sended";
echo json_encode($response);
