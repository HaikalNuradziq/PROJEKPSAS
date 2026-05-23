<?php
include 'config.php';

$username = $_POST['username'];
$email    = $_POST['email'];
$password = $_POST['password'];

$check = mysqli_query($conn, "SELECT * FROM users WHERE email='$email'");

if(mysqli_num_rows($check) > 0){
    echo json_encode([
        "status" => "error",
        "message" => "Email sudah digunakan"
    ]);
    exit;
}

$query = "INSERT INTO users(username,email,password)
VALUES('$username','$email','$password')";

if(mysqli_query($conn, $query)){
    echo json_encode([
        "status" => "success",
        "message" => "Register berhasil"
    ]);
}else{
    echo json_encode([
        "status" => "error",
        "message" => "Register gagal"
    ]);
}
?>