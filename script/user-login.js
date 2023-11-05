document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah pengiriman formulir secara default

    // Mengambil data dari formulir login
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Kirim data ke server (login.php) menggunakan AJAX
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "../src/login.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // Respon dari server
            var response = xhr.responseText;
            if (response === "Login berhasil.") {
                // Redirect ke dashboard
                window.location.href = "../dashboard/dashboard-pickup.html";
            } else {
                // Tampilkan pesan kesalahan jika login gagal
                alert(response);
            }
        }
    };

    // Kirim data username dan password ke server
    var data = "username=" + username + "&password=" + password;
    xhr.send(data);
});
