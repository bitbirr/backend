// This model will handle wallet addresses for users.
const db = require('../config/db');

// Wallet model
const Wallet = {
  addWalletAddress: (userId, address, coin, network, nickname, isDefault, callback) => {
    const sql = 'INSERT INTO wallets (user_id, address, coin, network, nickname, is_default) VALUES (?, ?, ?, ?, ?, ?)';
    db.query(sql, [userId, address, coin, network, nickname, isDefault], callback);
  },
  getWalletsByUserId: (userId, callback) => {
    const sql = 'SELECT * FROM wallets WHERE user_id = ?';
    db.query(sql, [userId], callback);
  },
  setDefaultAddress: (userId, coin, callback) => {
    const sql = 'UPDATE wallets SET is_default = 0 WHERE user_id = ? AND coin = ?';
    db.query(sql, [userId, coin], (err) => {
      if (err) return callback(err);
      const setDefaultSql = 'UPDATE wallets SET is_default = 1 WHERE user_id = ? AND coin = ? AND is_default = 1';
      db.query(setDefaultSql, [userId, coin], callback);
    });
  }
};

module.exports = Wallet;