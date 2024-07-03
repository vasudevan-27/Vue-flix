<?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "businessdb";

    $conn = new mysqli($servername, $username, $password, $dbname);

    if($conn->connect_error) {
        die("Connection failed: " . $connect_error);
    }
?>