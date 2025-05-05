// This model will handle users’ profile data.
const db = require('../config/db');

// Profile model
const Profile = {
  editProfile: (userId, name, phone, email, callback) => {
    const sql = 'UPDATE users SET name = ?, phone = ?, email = ? WHERE id = ?';
    db.query(sql, [name, phone, email, userId], callback);
  },
  getProfile: (userId, callback) => {
    const sql = 'SELECT name, phone, email FROM users WHERE id = ?';
    db.query(sql, [userId], callback);
  }
};

module.exports = Profile;