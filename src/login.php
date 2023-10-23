<?php
require '../src/connection.php';
$username = $_POST["username"];
$password = $_POST["password"];

$query_sql = "SELECT * FROM users
            WHERE username = '$username' AND password = '$password'";

$result = mysqli_query($conn, $query_sql);

if (mysqli_num_rows($result) > 0) {
    header("Location: ../dashboard/dashboard-pickup.html");
} else {
    echo "<center><h1> Email atau password anda salah.silahkan coba login kembali.</h1> <button><strong><a href='../login/login.html'>Login<a/></strong></button></center>";
}

