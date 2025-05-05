const express = require('express');
const User = require('../models/user');
const router = express.Router();

// Create a new user
router.post('/register', (req, res) => {
  const { username, password, email } = req.body;
  User.createUser(username, password, email, (err, results) => {
    if (err) return res.status(500).json(err);
    res.status(201).json({ message: 'User created successfully', userId: results.insertId });
  });
});

// Get user by ID
router.get('/:id', (req, res) => {
  User.getUserById(req.params.id, (err, results) => {
    if (err) return res.status(500).json(err);
    if (results.length === 0) return res.status(404).json({ message: 'User not found' });
    res.status(200).json(results[0]);
  });
});

module.exports = router;