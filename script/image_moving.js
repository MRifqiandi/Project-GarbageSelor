var fotoIndex = 1; // Indeks foto awal
var jumlahFoto = 3; // Jumlah total foto yang tersedia
var intervalId;

function gantiFoto() {
  clearInterval(intervalId); // Hentikan penggantian otomatis jika pengguna mengganti foto manual
  ubahFoto();
}

function otomatisGantiFoto() {
  intervalId = setInterval(ubahFoto, 2000); // Ganti foto otomatis setiap 3 detik
}

function ubahFoto() {
  fotoIndex++;
  if (fotoIndex > jumlahFoto) {
    fotoIndex = 1; // Kembali ke foto pertama setelah mencapai foto terakhir
  }

  var foto = document.getElementById("foto");
  foto.src = "../moving-image/foto" + fotoIndex + ".jpg"; // Ganti sumber gambar sesuai dengan indeks dan path folder
  foto.style.transform = "scale(1.1)"; // Efek zoom in sederhana
  setTimeout(() => {
    foto.style.transform = "scale(1)"; // Kembalikan ke skala semula setelah 0.3 detik
  }, 300);
}

// Jalankan otomatisGantiFoto() untuk memulai penggantian otomatis
otomatisGantiFoto();
