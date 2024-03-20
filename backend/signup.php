<?php
include("credentials.php");
$first_name=$_POST["first_name"];
$last_name=$_POST["last_name"];
$password=$_POST["password"];
$email=$_POST["email"];

$query=$mysqli->prepare("select first_name from users where first_name=?");
$query->bind_param('s',$first_name);
$query->execute();
$query->store_result();
$num_rows=$query->num_rows();

if($num_rows==0){
    $hash_password=password_hash($password, PASSWORD_BCRYPT);
    $query=$mysqli->prepare("insert into users(first_name,last_name,password_hash,email) values(?,?,?,?)");
    $query->bind_param('ssss',$first_name,$last_name,$hash_password,$email);
    $query->execute();
    $response['status'] = "success";
    $response['message'] = "user( $first_name  $last_name )was created successfully";
}
else{
    $response['status']="failed";
    $response['message']="This user is already exist";
}
echo json_encode($response);