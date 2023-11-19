<?php
require '../src/connection.php';
$username = $_POST["username"];
$password = $_POST["password"];

$query_sql = "SELECT * FROM user
            WHERE username = '$username' AND password = '$password'";

$result = mysqli_query($conn, $query_sql);

if (mysqli_num_rows($result) > 0) {
    $row = mysqli_fetch_assoc($result);
    $role = $row['role']; // Mengambil peran pengguna dari database

    if ($role === 'admin') {
        header("Location: ../dashboard/dashboard-admin.html");
    } elseif ($role === 'user') {
        header("Location: ../dashboard/dashboard-pickup.html");
    } elseif ($role === 'driver') {
        header("Location: ../dashboard/dashboard-driver.html");
    } else {
        echo "<center><h1>Peran pengguna tidak valid.</h1></center>";
    }
} else {
    echo "<center><h1>Email atau password anda salah. Silahkan coba login kembali.</h1> <button><strong><a href='../login/login.html'>Login<a/></strong></button></center>";
}
?>
