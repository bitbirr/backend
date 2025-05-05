const express = require('express');
const Transaction = require('../models/transaction');
const router = express.Router();

// Create a new transaction
router.post('/', (req, res) => {
  const { userId, cryptoCurrency, amount, type } = req.body;
  Transaction.createTransaction(userId, cryptoCurrency, amount, type, (err, results) => {
    if (err) return res.status(500).json(err);
    res.status(201).json({ message: 'Transaction created successfully', transactionId: results.insertId });
  });
});

// Get transactions by user ID
router.get('/:userId', (req, res) => {
  Transaction.getTransactionsByUserId(req.params.userId, (err, results) => {
    if (err) return res.status(500).json(err);
    res.status(200).json(results);
  });
});

module.exports = router;