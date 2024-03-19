<?php
include("connection.php");
$given_username=$_POST['username'];
$password=$_POST['password'];
$query=$mysqli->prepare("select *  from users where first_name=?");
$query->bind_param('s',$given_username);
$query->execute();
$query->store_result();
$query->bind_result($id,$first_name,$last_name,$email,$password_hash,$passport_number,$phone_number,$date_of_birth,$coins);
$query->fetch();
$num_rows=$query->num_rows();
if($num_rows==0){
    $response['status']="failed";
    $response['first name']=$first_name;
}else{
    if(password_verify($password, $password_hash)){
        $response['status']="success";
        $response['first name']=$first_name;
        $response['last name']=$last_name;
        $response['email']=$email;
        $response["passport"]=$passport_number;
        $response["date_of_birth"]=$date_of_birth;
        $response["coins"]=$coins;
    }
    else{
        $response['status']="failed";
        $response['password']=$password_hash;
        $response['name']=$first_name;
    }
}
echo json_encode($response);