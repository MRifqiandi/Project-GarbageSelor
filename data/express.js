// Rute untuk admin mengirim notifikasi
app.post('/send-notification', (req, res) => {
    const { message } = req.body;
    const query = `INSERT INTO notifications (message) VALUES ('${message}')`;
    db.query(query, (err, result) => {
        if (err) {
            console.error('Gagal mengirim notifikasi:', err);
            res.status(500).json({ error: 'Gagal mengirim notifikasi' });
        } else {
            // Kirim notifikasi ke semua koneksi driver menggunakan WebSocket
            wss.clients.forEach((client) => {
                if (client.readyState === WebSocket.OPEN) {
                    client.send(message);
                }
            });
            res.json({ success: true });
        }
    });
});
