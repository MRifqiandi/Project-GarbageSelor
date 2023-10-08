function updateWaktu() {
  var sekarang = new Date();

  // Mendapatkan hari
  var hari = sekarang.toLocaleDateString('id-ID', { weekday: 'long' });

  // Mendapatkan tanggal, bulan, dan tahun
  var tanggal = sekarang.getDate();
  var options = { month: 'long', year: 'numeric', locale: 'id-ID' };
  var bulanTahun = new Intl.DateTimeFormat('id-ID', options).format(sekarang);

  // Mendapatkan waktu
  var jam = sekarang.getHours();
  var menit = sekarang.getMinutes();
  var detik = sekarang.getSeconds();

  // Format jam, menit, dan detik menjadi dua digit (misal: 09:05:12)
  jam = (jam < 10) ? "0" + jam : jam;
  menit = (menit < 10) ? "0" + menit : menit;
  detik = (detik < 10) ? "0" + detik : detik;

  var waktu = jam + ":" + menit + ":" + detik;

  // Memasukkan informasi ke dalam elemen HTML
  document.getElementById("hari").textContent = hari;
  document.getElementById("tanggal").textContent = tanggal;
  document.getElementById("bulan").textContent = bulanTahun;
  // document.getElementById("tahun").textContent = sekarang.getFullYear();
  document.getElementById("waktu").textContent = waktu;
}

// Memanggil fungsi updateWaktu setiap detik
setInterval(updateWaktu, 1000);

// Memanggil fungsi updateWaktu untuk pertama kali saat halaman dimuat
updateWaktu();
