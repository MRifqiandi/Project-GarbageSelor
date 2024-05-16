// const http = require("http");
// const WebSocket = require("ws");

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/plain" });
//   res.end("WebSocket Server");
// });

// const wss = new WebSocket.Server({ server });
// const clients = new Set();

// wss.on("connection", (ws) => {
//   clients.add(ws);

//   ws.on("message", (message) => {
//     try {
//       const parsedMessage = JSON.parse(message);
//       if (parsedMessage.type === "Penjemputan") {
//         const pickupType = parsedMessage.value;

//         // Proses pesan dari pengguna di sini
//         clients.forEach((client) => {
//           if (client !== ws && client.readyState === WebSocket.OPEN) {
//             client.send(`Penjemputan: ${pickupType}`);
//           }
//         });
//       } else if (parsedMessage.type === "AdminAction") {
//         const adminAction = parsedMessage.action;

//         // Proses tindakan yang dikirim oleh admin di sini
//         if (adminAction === "terima") {
//           // Penjemputan diterima
//           // Kirim notifikasi balik ke pengguna yang mengajukan penjemputan
//           clients.forEach((client) => {
//             if (client !== ws && client.readyState === WebSocket.OPEN) {
//               client.send("Penjemputan diterima oleh admin");
//             }
//           });
//         } else if (adminAction === "tolak") {
//           // Penjemputan ditolak
//           // Kirim notifikasi balik ke pengguna yang mengajukan penjemputan
//           clients.forEach((client) => {
//             if (client !== ws && client.readyState === WebSocket.OPEN) {
//               client.send("Penjemputan ditolak oleh admin");
//             }
//           });
//         }
//       }
//     } catch (error) {
//       console.error("Kesalahan dalam penguraian pesan:", error);
//     }
//   });

//   ws.on("close", () => {
//     clients.delete(ws);
//   });
// });

// server.listen(3000, () => {
//   console.log("Server berjalan pada port 3000");
// });

// server.js
const http = require("http");
const WebSocket = require("ws");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("WebSocket Server");
});

const wss = new WebSocket.Server({ server });
const clients = new Set();

wss.on("connection", (ws) => {
  clients.add(ws);

  ws.on("message", (message) => {
    try {
      const parsedMessage = JSON.parse(message);
      if (parsedMessage.type === "Penjemputan") {
        const pickupType = parsedMessage.value;

        // Proses pesan dari pengguna di sini
        broadcastToAdmin(`Penjemputan: ${pickupType}`);
      } else if (parsedMessage.type === "AdminAction") {
        const adminAction = parsedMessage.action;

        // Proses tindakan yang dikirim oleh admin di sini
        if (adminAction === "terima") {
          broadcastToUser("Penjemputan diterima oleh admin");
        } else if (adminAction === "tolak") {
          broadcastToUser("Penjemputan ditolak oleh admin");
        }
      } else if (parsedMessage.type === "KonfirmasiSelesai") {
        // Konfirmasi dari user bahwa penjemputan telah selesai
        console.log("Konfirmasi: Penjemputan selesai oleh user");
        // Lakukan tindakan yang sesuai, misalnya memberi tahu admin
        broadcastToAdmin("Penjemputan selesai oleh user");
      }
    } catch (error) {
      console.error("Kesalahan dalam penguraian pesan:", error);
    }
  });

  ws.on("close", () => {
    clients.delete(ws);
  });
});

function broadcastToUser(message) {
  // Kirim pesan ke semua user
  clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(message);
    }
  });
}

function broadcastToAdmin(message, sender) {
  // Kirim pesan ke semua admin kecuali pengirim (sender)
  clients.forEach((client) => {
    if (client !== sender && client.readyState === WebSocket.OPEN) {
      client.send(message);
    }
  });
}

server.listen(3000, () => {
  console.log("Server berjalan pada port 3000");
});
