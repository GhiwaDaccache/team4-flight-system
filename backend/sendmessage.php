<?php
include("messages.php");
$receiver_id=$_POST["id"];
$chat_id=$_POST["chat_id"];
$sender_id=$_POST["sender_id"];
$message=$_POST["message"];
$query=$mysqli->prepare("insert into messages(id,chat_id,sender_id,message_text) value(?,?,?,?)");
$query->bind_param('ssss',$receiver_id,$chat_id,$sender_id,$message);
$query->execute();
$response["response"]="sended";
echo json_encode($response);
