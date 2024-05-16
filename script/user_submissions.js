// const socket = new WebSocket("ws://localhost:3000");

// socket.onmessage = (event) => {
//   const message = event.data;
//   const notifications = document.getElementById("notifications");
//   const li = document.createElement("li");
//   li.textContent = message;
//   notifications.appendChild(li);

//   // Tambahkan logika untuk menangani notifikasi dan respons dari admin.
//   handleNotification(message);
// };

// document.getElementById("truck").addEventListener("click", () => {
//   sendPickupRequest("Truck");
// });

// document.getElementById("amroll").addEventListener("click", () => {
//   sendPickupRequest("Amroll");
// });

// function sendPickupRequest(pickupType) {
//   const message = JSON.stringify({ type: "Penjemputan", value: pickupType });
//   socket.send(message);
// }

// function handleNotification(message) {
//   // Logika untuk menangani notifikasi dari admin.
//   if (message.includes("Admin menerima penjemputan")) {
//     // Admin menerima penjemputan, lakukan tindakan yang sesuai.
//   } else if (message.includes("Admin menolak penjemputan")) {
//     // Admin menolak penjemputan, lakukan tindakan yang sesuai.
//   }
// }
// user_submissions.js
const socket = new WebSocket("ws://localhost:3000");

socket.onmessage = (event) => {
  const message = event.data;
  const notifications = document.getElementById("notifications");
  const li = document.createElement("li");
  li.textContent = message;
  notifications.appendChild(li);

  // Tambahkan logika untuk menangani notifikasi dan respons dari admin.
  handleNotification(message);
};

document.getElementById("truck").addEventListener("click", () => {
  sendPickupRequest("Truck");
});

document.getElementById("amroll").addEventListener("click", () => {
  sendPickupRequest("Amroll");
});

function sendPickupRequest(pickupType) {
  const message = JSON.stringify({ type: "Penjemputan", value: pickupType });

  // Tambahkan pesan "Silahkan tunggu permintaan sedang di proses" ke notifikasi
  const notifications = document.getElementById("notifications");
  const processingLi = document.createElement("li");
  processingLi.textContent = "Silahkan tunggu permintaan sedang di proses";
  notifications.appendChild(processingLi);

  socket.send(message);
}

function handleNotification(message) {
  // Logika untuk menangani notifikasi dari admin.
  const notifications = document.getElementById("notifications");

  if (message.includes("Silahkan tunggu permintaan sedang di proses")) {
    // Pesan "Silahkan tunggu permintaan sedang di proses" diterima, tidak perlu tindakan tambahan
  } else if (
    message.includes("Penjemputan diterima oleh admin") ||
    message.includes("Penjemputan ditolak oleh admin")
  ) {
    // Admin menerima atau menolak penjemputan, hapus pesan "Silahkan tunggu permintaan sedang di proses"
    const processingLi = notifications.querySelector("li:last-child");
    if (
      processingLi &&
      processingLi.textContent.includes(
        "Silahkan tunggu permintaan sedang di proses"
      )
    ) {
      notifications.removeChild(processingLi);
    }
  }
}
document.getElementById("konfirmasi").addEventListener("click", () => {
  sendConfirmation();
});

function sendConfirmation() {
  const confirmationMessage = JSON.stringify({ type: "KonfirmasiSelesai" });
  socket.send(confirmationMessage);
}
