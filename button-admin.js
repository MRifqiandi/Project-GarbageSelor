// function ubahTombol(aksi) {
//     // Mengubah teks dan tampilan tombol sesuai dengan aksi yang dipilih
//     if (aksi === 'approve') {
//         document.getElementById('approveButton').innerText = 'Diterima';
//         document.getElementById('approveButton').disabled = true;
//         document.getElementById('rejectButton').style.display = 'none';
//         document.getElementById('resetButton').style.display = 'inline-block';
//     } else if (aksi === 'reject') {
//         document.getElementById('rejectButton').innerText = 'Ditolak';
//         document.getElementById('rejectButton').disabled = true;
//         document.getElementById('approveButton').style.display = 'none';
//         document.getElementById('resetButton').style.display = 'inline-block';
//     }
// }

// function resetTombol() {
//     // Mengembalikan tampilan tombol ke kondisi awal
//     // document.getElementById('approveButton').innerText = 'Terima';
//     document.getElementById('approveButton').disabled = false;
//     // document.getElementById('rejectButton').innerText = 'Tolak';
//     document.getElementById('rejectButton').disabled = false;
//     document.getElementById('approveButton').style.display = 'inline-block';
//     document.getElementById('rejectButton').style.display = 'inline-block';
//     document.getElementById('resetButton').style.display = 'none';
// }

// var tampilanAwalTerima = document.getElementById('approveButton').outerHTML;
// var tampilanAwalTolak = document.getElementById('rejectButton').outerHTML;

// function ubahTombol(aksi) {
//     // Mengubah tampilan tombol sesuai dengan aksi yang dipilih
//     if (aksi === 'approve') {
//         document.getElementById('approveButton').innerText = 'Diterima';
//         document.getElementById('approveButton').disabled = true;
//         document.getElementById('rejectButton').style.display = 'none';
//         document.getElementById('resetButton').style.display = 'inline-block';
//     } else if (aksi === 'reject') {
//         document.getElementById('rejectButton').innerText = 'Ditolak';
//         document.getElementById('rejectButton').disabled = true;
//         document.getElementById('approveButton').style.display = 'none';
//         document.getElementById('resetButton').style.display = 'inline-block';
//     }
// }

// function resetTombol() {
//     // Mengembalikan tampilan tombol ke kondisi awal
//     document.getElementById('approveButton').outerHTML = tampilanAwalTerima;
//     document.getElementById('rejectButton').outerHTML = tampilanAwalTolak;
// }