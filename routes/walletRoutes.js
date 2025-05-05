// This route will handle wallet operations.
const express = require('express');
const Wallet = require('../models/wallet');
const router = express.Router();

// Add Wallet Address
router.post('/add', (req, res) => {
  const { userId, address, coin, network, nickname, isDefault } = req.body;
  Wallet.addWalletAddress(userId, address, coin, network, nickname, isDefault, (err, results) => {
    if (err) return res.status(500).json(err);
    res.status(201).json({ message: 'Wallet address added successfully' });
  });
});

// Get Wallets by User ID
router.get('/:userId', (req, res) => {
  Wallet.getWalletsByUserId(req.params.userId, (err, results) => {
    if (err) return res.status(500).json(err);
    res.status(200).json(results);
  });
});

// Set Default Address
router.put('/default', (req, res) => {
  const { userId, coin } = req.body;
  Wallet.setDefaultAddress(userId, coin, (err) => {
    if (err) return res.status(500).json(err);
    res.status(200).json({ message: 'Default wallet address set successfully' });
  });
});

module.exports = router;