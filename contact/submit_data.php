<?php
$insert = false;

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // DB connection
    // $servername = "localhost";
    // $username = "root";
    // $password = "";
    // $dbname = "review";

    $servername = "Your database host"; 
    $username = "Your database username"; 
    $password = "Your database password";
    $dbname = " Your database name";

    $conn = new mysqli($servername, $username, $password, $dbname);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Get form data
    $message = $_POST['message'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $file_path = "";

    // File upload
    if (isset($_FILES["file"]) && $_FILES["file"]["error"] == 0) {
        $target_dir = "uploads/";
        if (!is_dir($target_dir)) {
            mkdir($target_dir, 0777, true);
        }

        $file_name = time() . "_" . basename($_FILES["file"]["name"]);
        $file_path = $target_dir . $file_name;
        move_uploaded_file($_FILES["file"]["tmp_name"], $file_path);
    }

    // Prepared statement
    $sql = "INSERT INTO review (message, email, phone, file_path, dt) VALUES (?, ?, ?, ?, current_timestamp())";
    $stmt = $conn->prepare($sql);

    if ($stmt) {
        $stmt->bind_param("ssss", $message, $email, $phone, $file_path);
        if ($stmt->execute()) {
            $insert = true;
            echo "success";
        } else {
            echo "Error: " . $stmt->error;
        }
        $stmt->close();
    } else {
        echo "Prepare failed: " . $conn->error;
    }

    $conn->close();
}
?>
