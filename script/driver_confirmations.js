// const socket = new WebSocket("ws://localhost:3000");

// socket.onclose = (event) => {
//   if (event.wasClean) {
//     console.log("WebSocket ditutup dengan bersih");
//   } else {
//     console.error("Koneksi WebSocket terputus secara tiba-tiba");
//   }
// };

// // Dan selanjutnya, event listener dan fungsi lainnya.

// socket.onmessage = (event) => {
//   const message = event.data;
//   const notifications = document.getElementById("notifications");
//   const li = document.createElement("li");
//   li.textContent = message;
//   notifications.appendChild(li);

//   // Tambahkan logika untuk menangani notifikasi dari admin.
//   handleNotification(message);
// };

// document.getElementById("konfirmasi").addEventListener("click", () => {
//   if (socket.readyState === WebSocket.OPEN) {
//     const konfirmasiText = document.getElementById("konfirmasiText").value;
//     sendConfirmation(konfirmasiText);
//   } else {
//     console.error("Koneksi WebSocket ditutup atau sedang ditutup.");
//   }
// });

// function sendConfirmation(confirmationText) {
//   const confirmationMessage = `Konfirmasi penjemputan: ${confirmationText}`;
//   socket.send(confirmationMessage);
//   // Bersihkan input teks setelah mengirim pesan
//   document.getElementById("konfirmasiText").value = "";
// }

// function handleNotification(message) {
//   // Logika untuk menangani notifikasi dari admin.
//   if (message.includes("Admin menerima penjemputan")) {
//     // Admin menerima penjemputan, lakukan tindakan yang sesuai.
//   } else if (message.includes("Admin menolak penjemputan")) {
//     // Admin menolak penjemputan, lakukan tindakan yang sesuai.
//   }
// }
