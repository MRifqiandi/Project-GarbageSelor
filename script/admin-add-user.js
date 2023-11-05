// admin.js (Tambahkan validasi di sini jika diperlukan)

document.getElementById("add-user-form").addEventListener("submit", function (event) {
    var newUsername = document.getElementById("new-username").value;
    var newPassword = document.getElementById("new-password").value;

    // Contoh validasi sederhana: Pastikan password memiliki panjang tertentu
    if (newPassword.length < 6) {
        alert("Password harus memiliki setidaknya 6 karakter.");
        event.preventDefault(); // Mencegah pengiriman formulir jika validasi gagal
    }
});
