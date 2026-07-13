<?php
    header("Access-control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: DELETE, OPTIONS");
    header('Access-Control-Allow-Headers: Content-Type');
    header("Content-Type: application/json");
    if($_SERVER['REQUEST_METHOD'] === 'OPTIONS'){http_response_code(200); exit;}
    if($_SERVER['REQUEST_METHOD'] !== 'DELETE'){
        http_response_code(405);
        echo json_encode(["error" => "Method not allowed"]);
        exit;
    }
    $data = json_decode(file_get_contents("php://input"), true);
    if(!isset($data['id'])){
        http_response_code(400);
        echo json_encode(["error" => "Invalid input"]);
        exit;
    }
    try{
        $stmt = $conn -> prepare("DELETE FROM movies WHERE id =:id");
        $stmt -> bindParam(':id', $data['id']);
        $stmt -> execute();
        echo json_encode(["message" => "Movie deleted successfully"]);
    }catch(PDOException $e){
        http_response_code(500);
        echo json_encode(["error" => $e -> getMessage()]);
    }
?>