<?php
    $host = "localhost";
    $db_name = "movie_app";
    $username = "root";
    $password = "20082005";
    try{
        $conn = new PDO("mysql:host=$host;db_name;charset=utf8,port:3307;", $username, $password);
        $conn -> setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    }catch(PDOException $e){
        http_response_code(500);
        echo json_encode(["error" => "Database connection failed:" . $e->getMessage()]);
        exit;
    }
?>