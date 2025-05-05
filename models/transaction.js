const db = require('../config/db');

// Transaction model
const Transaction = {
  createTransaction: (userId, cryptoCurrency, amount, type, callback) => {
    const sql = 'INSERT INTO transactions (user_id, crypto_currency, amount, type) VALUES (?, ?, ?, ?)';
    db.query(sql, [userId, cryptoCurrency, amount, type], callback);
  },
  getTransactionsByUserId: (userId, callback) => {
    const sql = 'SELECT * FROM transactions WHERE user_id = ?';
    db.query(sql, [userId], callback);
  }
};

module.exports = Transaction;