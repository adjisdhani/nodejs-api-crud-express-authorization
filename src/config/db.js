const mysql = require('mysql2');

if (!mysql) {
  console.error('mysql tidak ditemukan!');
}

const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

db.getConnection((err, connection) => {
    if (err) {
        console.error("❌ Database connection failed:", err.message);
    } else {
        console.log("✅ Database connected successfully!");
        connection.release(); // Pastikan koneksi dilepaskan kembali ke pool
    }
});

module.exports = db;