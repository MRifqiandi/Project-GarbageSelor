// const socket = new WebSocket("ws://localhost:3000");

// socket.onclose = (event) => {
//   if (event.wasClean) {
//     console.log("WebSocket ditutup dengan bersih");
//   } else {
//     console.error("Koneksi WebSocket terputus secara tiba-tiba");
//   }
// };

// document.getElementById("submit").addEventListener("click", () => {
//   const pickupType = document.getElementById("pickupType").value;
//   const message = JSON.stringify({ type: "Penjemputan", value: pickupType });
//   socket.send(message);
// });

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
  socket.send(message);
}

function handleNotification(message) {
  // Logika untuk menangani notifikasi dari admin.
  if (message.includes("Admin menerima penjemputan")) {
    // Admin menerima penjemputan, lakukan tindakan yang sesuai.
  } else if (message.includes("Admin menolak penjemputan")) {
    // Admin menolak penjemputan, lakukan tindakan yang sesuai.
  }
}
