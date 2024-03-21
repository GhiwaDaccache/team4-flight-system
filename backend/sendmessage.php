<?php
include("messages.php");

$chat_id=$_POST["chat_id"];
$sender_id=$_POST["sender_id"];
$message=$_POST["message"];
$date=date("Y-m-d H:i:s");

$query=$mysqli->prepare("insert into messages(chat_id,sender_id,message_text,sent_at) value(?,?,?,?)");
$query->bind_param('ssss',$chat_id,$sender_id,$message,$date);
$query->execute();
$response["response"]="sended";
echo json_encode($response);
