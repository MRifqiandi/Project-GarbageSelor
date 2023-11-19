// const adminSocket = new WebSocket("ws://localhost:3000");

// adminSocket.onclose = (event) => {
//   if (event.wasClean) {
//     console.log("WebSocket admin ditutup dengan bersih");
//   } else {
//     console.error("Koneksi WebSocket admin terputus secara tiba-tiba");
//   }
// };

// adminSocket.onmessage = (event) => {
//   const message = event.data;
//   const notifications = document.getElementById("notifications");
//   const li = document.createElement("li");
//   li.textContent = message;
//   notifications.appendChild(li);

//   // Tambahkan logika untuk menangani notifikasi dari driver.
//   handleNotification(message);
// };

// document.getElementById("konfirmasi").addEventListener("click", () => {
//   if (adminSocket.readyState === WebSocket.OPEN) {
//     const konfirmasiText = document.getElementById("konfirmasiText").value;
//     sendConfirmation(konfirmasiText);
//   } else {
//     console.error("Koneksi WebSocket admin ditutup atau sedang ditutup.");
//   }
// });

// function sendConfirmation(confirmationText) {
//   const confirmationMessage = `Konfirmasi penjemputan: ${confirmationText}`;
//   adminSocket.send(confirmationMessage);
//   // Bersihkan input teks setelah mengirim pesan
//   document.getElementById("konfirmasiText").value = "";
// }

// function handleNotification(message) {
//   // Logika untuk menangani notifikasi dari driver.
//   if (message.includes("Driver mengonfirmasi penjemputan")) {
//     // Admin menerima konfirmasi penjemputan dari driver, lakukan tindakan yang sesuai.
//   }
// }
