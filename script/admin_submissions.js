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

// admin.js
document.addEventListener("DOMContentLoaded", function () {
  var pickupHistory = [];
  var pickupHistoryList = document.getElementById("pickupHistory");

  function addToPickupHistory(pickupStatus) {
    pickupHistory.push(pickupStatus);
    updateHistoryView();
  }

  function updateHistoryView() {
    pickupHistoryList.innerHTML = "";
    pickupHistory.forEach(function (status) {
      var listItem = document.createElement("li");
      listItem.textContent = status;
      pickupHistoryList.appendChild(listItem);
    });
  }

  document
    .getElementById("sendMessageButton")
    .addEventListener("click", function () {
      var messageInput = document.getElementById("messageInput");
      var message = messageInput.value;

      if (message) {
        sendMessage(message);
        messageInput.value = "";
      }
    });

  const socket = new WebSocket("ws://localhost:3000");

  socket.onmessage = (event) => {
    const message = event.data;
    addToPickupHistory("Admin: " + message);

    // Tambahkan logika untuk menangani notifikasi dan respons dari admin kepada user.
    handleNotificationToUser(message);
  };

  function sendMessage(message) {
    var socket = new WebSocket("ws://localhost:3000");
    socket.onopen = function (event) {
      socket.send(message);
      socket.close();
    };
  }

  function handleNotificationToUser(message) {
    // Logika untuk menangani notifikasi dari admin kepada user.
    if (message.includes("Penjemputan diterima")) {
      addToUserRequestHistory("Penjemputan diterima: " + message);
    } else if (message.includes("Penjemputan ditolak")) {
      addToUserRequestHistory("Penjemputan ditolak: " + message);
    }
  }
});
