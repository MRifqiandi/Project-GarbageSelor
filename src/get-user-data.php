<?php
// Koneksi ke database (sama seperti sebelumnya)
$host = "localhost";
$username = "root";
$password = "";
$database = "dlh"; // Ganti dengan nama database Anda

$conn = new mysqli($host, $username, $password, $database);

if ($conn->connect_error) {
    die("Koneksi gagal: " . $conn->connect_error);
}

$username = "user1"; // Ganti dengan username pengguna yang sedang login

$query = "SELECT * FROM user WHERE username = '$username'";
$result = $conn->query($query);

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    
    // Cek role pengguna
    $role = $row["role"];
    
    // Jika role adalah "user"
    if ($role == "user") {
        $dataPengguna = array(
            "nama" => $row["nama"],
            "tanggal" => $row["tanggal"],
            "alamat" => $row["alamat"],
            "nomor_telepon" => $row["nomor_telepon"]
        );
        echo json_encode($dataPengguna);
    } else {
        echo json_encode(array("error" => "Pengguna tidak memiliki role yang sesuai."));
    }
} else {
    echo json_encode(array("error" => "Pengguna tidak ditemukan."));
}

$conn->close();
?>
