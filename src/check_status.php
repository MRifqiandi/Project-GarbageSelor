<?php
// check_status.php
// Periksa status penjemputan dari database MySQL
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "Garbage_Selor";

// Buat koneksi ke database
$conn = new mysqli($servername, $username, $password, $dbname);

// Periksa koneksi
if ($conn->connect_error) {
    die("Koneksi ke database gagal: " . $conn->connect_error);
}

// Query untuk mengambil status
$sql = "SELECT status FROM penjemputan WHERE id = 1"; // Gantilah 'penjemputan' dan 'id' sesuai dengan skema tabel Anda

$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    $status = $row['status'];
    echo $status;
} else {
    echo 'Status tidak ditemukan';
}

// Tutup koneksi ke database
$conn->close();
?>
