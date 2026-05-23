<?php
session_start();
include 'config.php';

$email    = $_POST['email'];
$password = $_POST['password'];

$query = mysqli_query($conn,
"SELECT * FROM users
WHERE email='$email'
AND password='$password'");

if(mysqli_num_rows($query) > 0){

    $user = mysqli_fetch_assoc($query);

    $_SESSION['user_id'] = $user['id'];
    $_SESSION['username'] = $user['username'];

    echo json_encode([
        "status" => "success",
        "username" => $user['username'],
        "balance" => $user['balance']
    ]);

}else{

    echo json_encode([
        "status" => "error",
        "message" => "Email atau password salah"
    ]);
}
?>