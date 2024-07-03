<?php
    require_once('db.php');

    if (isset($_SERVER['HTTP_ORIGIN'])) {
        header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
        header('Access-Control-Allow-Credentials: true');
        header('Access-Control-Max-Age: 86400');    // cache for 1 day
    }

    // Access-Control headers are received during OPTIONS requests
    if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {

        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
            header("Access-Control-Allow-Methods: GET, POST, OPTIONS");

        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
            header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

        exit(0);
    }



    header("Access-control-Allow-Origin: *");
    header("Content-type: application/json; charset=UTF-8");

    $data = json_decode(file_get_contents("php://input"));

    if (!$data) {
        echo json_encode(array("success" => false, "message" => "Invalid JSON data received"));
        exit;
    }

    if (!isset($data->username) || !isset($data->password)) {
        echo json_encode(array("success" => false, "message" => "Invalid username/password"));
        exit;
    }

    $username =  mysqli_real_escape_string($conn, $data->username);
    $password =  mysqli_real_escape_string($conn, $data->password);


   


    $sql = "SELECT * FROM users WHERE username='$username' AND password='$password'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        echo json_encode(array("success" => true, "username" => $username));
    } else {
        echo json_encode(array("success" => false, "message" => "Invalid username/password"));
    }

    $conn->close();

?>