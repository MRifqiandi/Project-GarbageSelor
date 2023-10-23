<?php
// update_status.php
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['status'])) {
    // Terima status dari permintaan POST
    $status = $_POST['status'];

    // Simpan status ke dalam database MySQL
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

    // Query untuk memperbarui status
    $sql = "UPDATE penjemputan SET status = '$status' WHERE id = 1"; // Gantilah 'penjemputan' dan 'id' sesuai dengan skema tabel Anda

    if ($conn->query($sql) === TRUE) {
        echo 'Status berhasil diperbarui.';
    } else {
        echo 'Terjadi kesalahan saat memperbarui status: ' . $conn->error;
    }

    // Tutup koneksi ke database
    $conn->close();
}
?>
