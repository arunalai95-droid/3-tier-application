const express = require('express');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Backend is working successfully!');
});

app.get('/health', (req, res) => {
    res.json({
        status: 'OK',
        message: 'Backend is healthy'
    });
});

app.listen(PORT, () => {
    console.log(`Backend server running on port ${PORT}`);
});
