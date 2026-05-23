<?php
session_start();
include 'config.php';

if(!isset($_SESSION['user_id'])){
    echo json_encode([
        "status" => "error",
        "message" => "Belum login"
    ]);
    exit;
}

$user_id = $_SESSION['user_id'];

$course_id = $_POST['course_id'];
$chapter   = $_POST['chapter'];

$query = "INSERT INTO progress(user_id, course_id, chapter_title, completed)
VALUES('$user_id','$course_id','$chapter',1)";

if(mysqli_query($conn, $query)){
    echo json_encode([
        "status" => "success"
    ]);
}else{
    echo json_encode([
        "status" => "error"
    ]);
}
?>