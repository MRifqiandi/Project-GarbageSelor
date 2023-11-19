document.getElementById("getDataButton").addEventListener("click", function () {
  // Ketika tombol ditekan, kirim permintaan ke server PHP untuk mengambil data
  fetch("../src/get-user-data.php")
    .then((response) => response.json())
    .then((data) => {
      // Tampilkan data yang diterima dari server
      document.getElementById("nama-pengguna").textContent = data.nama;
      document.getElementById("tanggal-pengguna").textContent = data.tanggal;
      document.getElementById("alamat-pengguna").textContent = data.alamat;
      document.getElementById("nomor-telepon-pengguna").textContent =
        data.nomor_telepon;
    });
});
