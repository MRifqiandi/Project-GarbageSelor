<?php
// Di sini Anda harus mengganti ini dengan kode koneksi ke database yang sesuai

// Contoh koneksi ke MySQL:
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "Garbage_Selor";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Koneksi database gagal: " . $conn->connect_error);
}

$sql = "SELECT status FROM penjemputan WHERE id=1"; // Ubah id sesuai dengan penjemputan yang ingin ditampilkan
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    $status = $row["status"];
    $data = ["status" => $status];
    echo json_encode($data);
} else {
    $data = ["status" => "Tidak ada data"];
    echo json_encode($data);
}

$conn->close();
?>
