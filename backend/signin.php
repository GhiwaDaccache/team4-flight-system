<?php
include("connection.php");
$given_username=$_post['username'];
$password=$_post['password'];
$query=$mysqli->include("select username password from users where username=?");
$query->bind_param('s',$given_username);
$query->execute();
$query->store_result();
$query->bind_result($first_name,$last_name,$email,$password_hash,$passport_number,$phone_number,$date_of_birth,$coins);
$query->fetch();
$num_rows=$query->num_rows();
if($num_rows==0){
    $response['status']="failed";
}else{
    if(password_verify($password,$password_hash)){
        $response['status']="success";
        $response['first name']=$first_name;
        $response['last name']=$last_name;
        $response['email']=$email;
        $response["passport"]=$passport_number;
        $response["date_of_birth"]=$date_of_birth;
        $coins["coins"]=$coins;
    }
    else{
        $response['status']="failed";
    }
}
echo json_encode($response);