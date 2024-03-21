<?php
include("messages.php");
$id=$_POST["sender_id"];
$query=$mysqli->prepare("select * from messages where sender_id=?");
$query->bind_param('i',$id);
$query->execute();

$query->store_result();


$num_rows=$query->num_rows();
if($num_rows==0){
    $response["status"]="failed";
    $response["message"]="No messages for this user";
}
else{
    $query->bind_result($id,$chat_id,$sender_id,$message,$date);
    $results=[];
    while($query->fetch()){
        $result=["id"=>$id,
        "chat_id"=>$chat_id,
        "sender_id"=>$sender_id,
       "message" =>$message,
       "date"=>$date

    ];
        $results[]=$result;
    }
    $response["results"]=$results;
}

echo json_encode($response);