const db = require('../config/db');
const bcrypt = require('bcrypt');

const User = {
  createUser: async (username, password, email, callback) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    const sql = 'INSERT INTO users (username, password, email) VALUES (?, ?, ?)';
    db.query(sql, [username, hashedPassword, email], callback);
  },
  getUserById: (id, callback) => {
    const sql = 'SELECT * FROM users WHERE id = ?';
    db.query(sql, [id], callback);
  },
  getUserByEmail: (email, callback) => {
    const sql = 'SELECT * FROM users WHERE email = ?';
    db.query(sql, [email], callback);
  },
  validatePassword: async (password, hashedPassword) => {
    return await bcrypt.compare(password, hashedPassword);
  }
};

module.exports = User;