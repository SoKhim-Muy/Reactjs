<?php
    require_once "config.php";
    header("Access-Control-Allow-Origin: *");
    header("content-Type: application/json");
    try{
        if(isset($_GET ['id'])){
            //Single Movie
            $stmt = $conn->query("SELECT * FROM movies WHERE id = :id");
            $stmt -> bindParam(':id', $_GET['id']);
            $stmt -> execute();
            $movie = $stmt -> fetch(PDO::FETCH_ASSOC);
            echo json_encode($movie ?: ["error" => "Movie not found"]);
        }else{
            //All movies
            $stmt = $conn -> query("SELECT * FROM movies");
            $movies = $stmt -> fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($movies);
        }
    }catch (PDOException $e){
        http_response_code(500);
        echo json_encode(["error" => $e -> getMessage()]);
    }
?>