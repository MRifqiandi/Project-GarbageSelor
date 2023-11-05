// Ambil data pengguna dari server dengan AJAX
const xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            if (response.error) {
                console.error(response.error);
            } else {
                document.getElementById("nama-pengguna").textContent = response.nama;
                document.getElementById("tanggal-pengguna").textContent = response.tanggal;
                document.getElementById("alamat-pengguna").textContent = response.alamat;
                document.getElementById("nomor-telepon-pengguna").textContent = response.nomor_telepon;
            }
        } else {
            console.error("Gagal mengambil data pengguna: " + xhr.status);
        }
    }
};
xhr.open("GET", "../src/get-user-data.php", true);
xhr.send();
