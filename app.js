const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const transactionRoutes = require('./routes/transactionRoutes');
const authRoutes = require('./routes/authRoutes');
const profileRoutes = require('./routes/profileRoutes'); // New
const walletRoutes = require('./routes/walletRoutes');   // New

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/transactions', transactionRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/profile', profileRoutes); // New
app.use('/api/wallets', walletRoutes);   // New

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});