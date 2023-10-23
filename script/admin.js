document.getElementById('approveButton').addEventListener('click', function() {
    // Kirim pesan bahwa penjemputan disetujui
    sendMessage('Penjemputan disetujui');
});

document.getElementById('rejectButton').addEventListener('click', function() {
    // Kirim pesan bahwa penjemputan ditolak
    sendMessage('Penjemputan ditolak');
});

document.getElementById("button-add-user").addEventListener("click", function() {
    window.location.href = "admin-add-user.html";
    });

function sendMessage(message) {
    var socket = new WebSocket('ws://localhost:3001');
    socket.onopen = function(event) {
        socket.send(message);
        socket.close(); 
    };
}