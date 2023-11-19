// const http = require("http");
// const WebSocket = require("ws");
// const express = require("express");

// const app = express();
// const server = http.createServer(app);

// // Server untuk HTTP
// app.get("/", (req, res) => {
//   res.writeHead(200, { "Content-Type": "text/plain" });
//   res.end("WebSocket Server");
// });

// // Server WebSocket
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

// // Start server
// server.listen(3000, () => {
//   console.log("Server berjalan pada port 3000");
// });
