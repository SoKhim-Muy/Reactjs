<?php
    require_once "config.php";
    // 1. CROS HEADERS
    header("Access-Control-Allow-Orign: *");
    header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-with");
    header("Content-Type: application/json; charset=UTF-8");

    //Handle preflight Options request
    if($_SERVER['REQUEST_METHOD'] === 'OPTIONS'){
        http_response_code(200);
        exit;
    }
    $method = $_SERVER['REQUEST_METHOD'];
    $url = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
    switch($method){
        case 'GET':
            //Handle GET request to retrieve all movies
            $stmt = $conn->prepare("SELECT * FROM movies");
            $stmt->execute();
            $movies = $stmt->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($movies);
            break;
        default:
            http_response_code(405);
            echo json_encode(['error' => 'Method Not Allowed']);
    }
?>