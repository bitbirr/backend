// This route will manage user profile operations.
const express = require('express');
const Profile = require('../models/profile');
const router = express.Router();

// Edit Profile
router.put('/edit', (req, res) => {
  const { userId, name, phone, email } = req.body;
  Profile.editProfile(userId, name, phone, email, (err, results) => {
    if (err) return res.status(500).json(err);
    res.status(200).json({ message: 'Profile updated successfully' });
  });
});

// Get Profile
router.get('/:userId', (req, res) => {
  Profile.getProfile(req.params.userId, (err, results) => {
    if (err) return res.status(500).json(err);
    if (results.length === 0) return res.status(404).json({ message: 'Profile not found' });
    res.status(200).json(results[0]);
  });
});

module.exports = router;