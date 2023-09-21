<?php
$host = "localhost"; 
$username = "root"; 
$password = "";
$database = "login";

$conn = mysqli_connect($host, $username, $password, $database);

if (!$conn) {
    die ("Koneksi gagal : " . mysqli_connect_error());
} else {
    echo "Koneksi berhasil " ;
}

