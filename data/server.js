
const WebSocket = require('websocket').server;
const http = require('http');

const server = http.createServer(function(request, response) {
    // Handling permintaan HTTP jika diperlukan
});

server.listen(3001, function() {
    console.log('Server berjalan di port 3001');
});

const wsServer = new WebSocket({
    httpServer: server
});

wsServer.on('request', function(request) {
    const connection = request.accept(null, request.origin);

    connection.on('message', function(message) {
        if (message.type === 'utf8') {
            // Terima pesan dari dashboard admin dan kirim ke dashboard driver
            var status = message.utf8Data;
            console.log('Received message:', status);
            broadcast(status);
        }
    });

    connection.on('close', function(reasonCode, description) {
        console.log('WebSocket connection closed');
    });
});

function broadcast(message) {
    // Kirim pesan ke semua klien (dashboard driver) yang terhubung
    wsServer.connections.forEach(function(client) {
        if (client.connected) {
            client.send(message);
        }
    });
}
