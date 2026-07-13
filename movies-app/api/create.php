<?php
    require_once "config.php";
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-with");
    header("Content-Type: application/json; charset=UTF-8 *");
    
    if($_SERVER['REQUEST_METHOD'] === 'OPTIONS'){
        http_response_code(200);
        exit;
    }
    $method = $_SERVER['REQUEST_METHOD'];
    $url = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
    switch($method){
        case 'POST':
            $data = json_decode(file_get_contents('php://input'), true);
            if(isset($data['title']) && isset($data['genre']) && isset($data['year']) && isset($data['description'])){
                $stmt = $conn->prepare("INSERT INTO movies (title, genre, `year`, `description`, 'rate`) VALUES (:title, :genre, :year, :description, :rate)");
                $stmt->bindParam(':tile', $data['title']);
                $stmt->bindParam(':genre', $data['genre']);
                $stmt->bindParam(':rate', $data['rate']);
                $stmt->bindParam(':year', $data['year']);
                $stmt->bindParam(':description', $data['description']);
                if($stmt->execute()){
                    http_response_code(201);
                    echo json_encode([
                        'message' => 'Movie created successfully',
                        'success' => true,
                        'id' => $conn->lastInsertId()
                    ]);
                }else{
                    http_response_code(500);
                    echo json_encode(['error' => 'Failed to create movie', 'success' => false]);
                }
            }else{
                http_response_code(400);
                echo json_encode(['error' => 'Invalid input', 'success' => false]);
            }
            break;
        default:
            http_response_code(405);
            echo json_encode(['error' => 'Method Not Allowed', 'success' => false]);
            break;
    }
?>