// const socket = new WebSocket("ws://localhost:3000");

// socket.onclose = (event) => {
//   if (event.wasClean) {
//     console.log("WebSocket ditutup dengan bersih");
//   } else {
//     console.error("Koneksi WebSocket terputus secara tiba-tiba");
//   }
// };

// socket.onmessage = (event) => {
//   const message = event.data;
//   const notifications = document.getElementById("notifications");
//   const li = document.createElement("li");
//   li.textContent = message;
//   notifications.appendChild(li);
// };

// document.getElementById("process").addEventListener("click", () => {
//   if (socket.readyState === WebSocket.OPEN) {
//     const selectedAction = document.querySelector(
//       'input[name="action"]:checked'
//     );
//     if (selectedAction) {
//       const action = selectedAction.value;
//       socket.send(`Admin ${action} penjemputan`);
//       clearSelection();
//     }
//   } else {
//     console.error("Koneksi WebSocket ditutup atau sedang ditutup.");
//   }
// });

// function clearSelection() {
//   const actionRadios = document.querySelectorAll('input[name="action"]');
//   actionRadios.forEach((radio) => {
//     radio.checked = false;
//   });
// }

const socket = new WebSocket("ws://localhost:3000");

socket.onmessage = (event) => {
  const message = event.data;
  const notifications = document.getElementById("notifications");
  const li = document.createElement("li");
  li.textContent = message;
  notifications.appendChild(li);

  // Tambahkan logika untuk menampilkan notifikasi dan mengelola permintaan dari pengguna.
  handleNotification(message);
};
document.getElementById("process").addEventListener("click", () => {
  if (socket.readyState === WebSocket.OPEN) {
    const selectedAction = document.querySelector(
      'input[name="action"]:checked'
    );
    if (selectedAction) {
      const action = selectedAction.value;
      const message = JSON.stringify({ type: "AdminAction", action: action });
      socket.send(message);
      clearSelection();
    }
  } else {
    console.error("Koneksi WebSocket ditutup atau sedang ditutup.");
  }
});

function clearSelection() {
  const actionRadios = document.querySelectorAll('input[name="action"]');
  actionRadios.forEach((radio) => {
    radio.checked = false;
  });
}

function handleNotification(message) {
  // Logika untuk menangani notifikasi dari pengguna dan memberikan respons.
  if (message.includes("Penjemputan diterima oleh admin")) {
    // Admin menerima penjemputan
    // Kirim notifikasi ke pengguna
    socket.send("Penjemputan diterima oleh admin");
    // Tindakan lain sesuai dengan respons admin.
  } else if (message.includes("Penjemputan ditolak oleh admin")) {
    // Admin menolak penjemputan
    // Kirim notifikasi ke pengguna
    socket.send("Penjemputan ditolak oleh admin");
    // Tindakan lain sesuai dengan respons admin.
  }
}
