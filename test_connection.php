<?php
include("db.php"); // Sertakan file koneksi database

if ($conn) {
    echo "Koneksi ke database berhasil.";
} else {
    echo "Koneksi ke database gagal: " . $conn->connect_error;
}
?>
