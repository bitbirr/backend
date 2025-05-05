const express = require('express');
const User = require('../models/user');
const { sendOTPEmail } = require('../config/nodemailer');
const router = express.Router();
const crypto = require('crypto');

let currentOTP; // Variable to store the current OTP

// User Login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  User.getUserByEmail(email, async (err, results) => {
    if (err) return res.status(500).json(err);
    if (results.length === 0) return res.status(404).json({ message: 'User not found' });

    const isValid = await User.validatePassword(password, results[0].password);
    if (!isValid) return res.status(401).json({ message: 'Invalid password' });

    // Generate OTP
    currentOTP = crypto.randomInt(100000, 999999); // Generate a 6-digit OTP
    await sendOTPEmail(email, currentOTP);
    res.status(200).json({ message: 'OTP sent to your email' });
  });
});

// Verify OTP
router.post('/verify-otp', (req, res) => {
  const { otp } = req.body;
  if (parseInt(otp) === currentOTP) {
    res.status(200).json({ message: 'OTP verified successfully' });
    currentOTP = null; // Reset OTP
  } else {
    res.status(400).json({ message: 'Invalid OTP' });
  }
});

module.exports = router;