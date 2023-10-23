<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $newUsername = $_POST["new-username"];
    $newPassword = $_POST["new-password"];

    require 'db.php'; 

    $sql = "INSERT INTO login (username, password) VALUES ('$newUsername', '$newPassword')";

    if ($conn->query($sql) === TRUE) {
        echo "Pengguna baru berhasil ditambahkan.";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
}
?>
