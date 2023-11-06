<?php
include("db.php"); // Sertakan file koneksi database

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"];
    $password = $_POST["password"];

    // Query database untuk memeriksa username dan password
    $sql = "SELECT * FROM users WHERE username = '$username' AND password = '$password'";
    $result = $conn->query($sql);

    if ($result->num_rows == 1) {
        session_start();
        $_SESSION["username"] = $username;
        header("Location: dashboard.php"); // Redirect to dashboard
        exit();
    } else {
        header("Location: ../login/login.php?error=1"); // Redirect with error message
        exit();
    }
}
?>
