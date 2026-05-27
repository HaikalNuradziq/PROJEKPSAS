<?php
session_start();
include 'config.php';
header('Content-Type: application/json');

if(!isset($_SESSION['user_id'])){
    echo json_encode([
        "status" => "error",
        "message" => "Belum login"
    ]);
    exit;
}

$user_id = mysqli_real_escape_string($conn, $_SESSION['user_id']);
$course_id = mysqli_real_escape_string($conn, $_POST['course_id'] ?? '');
$chapter   = mysqli_real_escape_string($conn, $_POST['chapter'] ?? '');

if (!$course_id || !$chapter) {
    echo json_encode([
        "status" => "error",
        "message" => "Data kursus tidak lengkap"
    ]);
    exit;
}

$query = "INSERT INTO progress(user_id, course_id, chapter_title, completed)
VALUES('$user_id','$course_id','$chapter',1)";

if(mysqli_query($conn, $query)){
    echo json_encode([
        "status" => "success"
    ]);
}else{
    echo json_encode([
        "status" => "error",
        "message" => mysqli_error($conn)
    ]);
}
?>
