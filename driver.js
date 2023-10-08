// var socket = new WebSocket('ws://localhost:3001'); 

// socket.onopen = function(event) {
//     console.log('WebSocket connection opened');
// };

// socket.onmessage = function(event) {
//     var status = event.data;
//     console.log('Received status:', status);
//     // Update status di dashboard driver
//     document.getElementById('pickup-status').textContent = status;
// };



var socket = new WebSocket('ws://localhost:3001'); // Sesuaikan URL WebSocket dengan server Anda

        socket.onopen = function(event) {
            console.log('WebSocket connection opened');
        };

        socket.onmessage = function(event) {
            var status = event.data;
            console.log('Received status:', status);
            // Update status di dashboard driver sesuai dengan pesan yang diterima
            document.getElementById('pickup-status').textContent = status;
        };

// var socket = new WebSocket('ws://localhost:3001');

//         socket.onmessage = function(event) {
//             var pesan = event.data;
//             if (pesan === 'approve') {
//                 document.getElementById('pickup-status').textContent = 'Penjemputan Diterima';
//             } else if (pesan === 'reject') {
//                 document.getElementById('pickup-status').textContent = 'Penjemputan Ditolak';
//             }
//         };

//         function resetTombol() {
//             // Mengirim pesan "Reset" ke dashboard admin
//             socket.send('Reset');
//             // Mengembalikan tampilan status penjemputan ke "Menunggu Keputusan"
//             document.getElementById('pickup-status').textContent = 'Menunggu Keputusan';
//         }