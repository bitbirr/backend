const db = require('../config/db');

// User model
const User = {
  createUser: (username, password, email, callback) => {
    const sql = 'INSERT INTO users (username, password, email) VALUES (?, ?, ?)';
    db.query(sql, [username, password, email], callback);
  },
  getUserById: (id, callback) => {
    const sql = 'SELECT * FROM users WHERE id = ?';
    db.query(sql, [id], callback);
  }
};

module.exports = User;