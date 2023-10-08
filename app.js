// const http = require('http');
// const fs = require('fs');

// const server = http.createServer((req, res) => {
//   if (req.url === '/sse') {
//     res.setHeader('Content-Type', 'text/event-stream');
//     res.setHeader('Cache-Control', 'no-cache');
    
//     // Dummy data, dalam situasi nyata Anda akan mengirimkan notifikasi dari admin ke sini
//     const dummyData = 'Admin has approved the pickup request!';
    
//     // Kirim data dummy setiap 5 detik
//     setInterval(() => {
//       res.write(`data: ${dummyData}\n\n`);
//     }, 5000);
//   } else {
//     // Serve halaman HTML yang menghubungkan ke /sse
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.end(fs.readFileSync('test.html'));
//   }
// });

// server.listen(3000, () => {
//   console.log('Server is running on port 3000');
// });
