<?php
// Koneksi ke database
$host = "localhost";
$username = "root";
$password = "";
$database = "garbage-selor"; // Ganti dengan nama database Anda

$conn = new mysqli($host, $username, $password, $database);

if ($conn->connect_error) {
    die("Koneksi gagal: " . $conn->connect_error);
}

// Ambil data dari formulir
$nama = $_POST["nama"];
$tanggal = $_POST["tanggal"];
$alamat = $_POST["alamat"];
$nomor_telepon = $_POST["nomor_telepon"];
$username = $_POST["username"];
$password = $_POST["password"];

// Simpan data ke tabel "users"
$sql = "INSERT INTO user_data (nama, tanggal, alamat, nomor_telepon, username, password) VALUES ('$nama', '$tanggal', '$alamat', '$nomor_telepon', '$username', '$password')";

if ($conn->query($sql) === TRUE) {
    echo "Pengguna berhasil ditambahkan.";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Tutup koneksi ke database
$conn->close();
?>
