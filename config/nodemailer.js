const nodemailer = require('nodemailer');
require('dotenv').config();

// Create a Nodemailer transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST, // e.g., smtp.bitbirr.net
  port: process.env.SMTP_PORT, // 587 for TLS or 465 for SSL
  secure: true, // Set to true if using port 465
  auth: {
    user: process.env.EMAIL_USER, // Your email
    pass: process.env.EMAIL_PASS  // Your email password
  },
  logger: true,
  debug: true // Enable debug output
});

// Function to send an OTP email
const sendOTPEmail = (to, otp) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: to,
    subject: 'Your OTP Code',
    text: `Your OTP code is: ${otp}`
  };

  return transporter.sendMail(mailOptions);
};

module.exports = { sendOTPEmail };