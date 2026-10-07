const express = require('express');
const mysql = require('mysql2/promise');

const app = express();
const PORT = 3000;

// RDS MySQL connection
const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: 3306
});

// Basic backend test
app.get('/', (req, res) => {
    res.send('Backend is working successfully!');
});

// Health check
app.get('/health', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT 1 AS db_status');

        res.json({
            status: 'OK',
            backend: 'healthy',
            database: 'connected',
            db_status: rows[0].db_status
        });
    } catch (error) {
        res.status(500).json({
            status: 'ERROR',
            database: 'connection failed',
            error: error.message
        });
    }
});

// Get users from RDS
app.get('/users', async (req, res) => {
    try {
        const [rows] = await db.query(
            'SELECT * FROM users'
        );

        res.json(rows);
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
});

app.listen(PORT, () => {
    console.log(`Backend server running on port ${PORT}`);
});
