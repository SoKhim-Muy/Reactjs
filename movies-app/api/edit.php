<?php
    require_once "config.php";

    //CROS headers
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: PUT, OPTIONS");
    header("Access-Control-Allow-Headers: content-Type");
    header("Content-type: application/json");
    if($_SERVER['REQUEST_METHOD']==='OPTIONS') {http_response_code(200); exit;}
    if($_SERVER['REQUEST_METHOD']!== 'PUT'){
        http_response_code(405);
        echo json_encode(["error" => "Method not allowed"]);
        exit;
    }
    $data = json_decode(file_get_contents("php://input"), true);
    if(!isset($data['id'], $data['title'], $data['rate'], $data['year'])){
        http_response_code(400);
        echo json_encode(["error" => "Invalid input"]);
        exit;
    }
    try{
        $stmt = $conn->prepare("UPDATE movies SET title = :title, genre = :genre, description = :description, rate = :rate, year = :year WHERE id= :id");
        $stmt -> bindParam(':title', $data['title']);
        $stmt -> bindParam(':genre', $data['genre']);
        $stmt -> bindParam(':description', $data['description']);
        $stmt -> bindParam(':rate', $data['rate']);
        $stmt -> bindParam(':year', $data['year']);
        $stmt -> bindParam(':id', $data['id']);
        $stmt -> execute();
        echo json_encode([
            'success' => true,
            'id' => $data['id'],
            "message" => "Movie updated successfully",
        ]);
    }catch(PDOException $e){
        http_response_code(500);
        echo json_encode([
            'success' => false,
            "error" => $e -> getMessage()
        ]);
    }
?>