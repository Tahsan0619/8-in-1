const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
require('dotenv').config();

const authRoutes = require('./routes/auth');
const menuRoutes = require('./routes/menu');
const errorHandler = require('./middleware/errorHandler');

const app = express();

app.use(helmet());
app.use(cors({ origin: process.env.CORS_ORIGIN || '*' }));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/auth', authRoutes);
app.use('/api/menu', menuRoutes);
app.use('/api/orders', (req, res) => res.status(501).json({ message: 'Orders routes coming soon' }));
app.use('/api/reservations', (req, res) => res.status(501).json({ message: 'Reservations routes coming soon' }));
app.use('/api/reviews', (req, res) => res.status(501).json({ message: 'Reviews routes coming soon' }));

app.get('/health', (req, res) => res.json({ status: 'OK', project: 'Khadok Kitchen Restaurant API' }));

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
mongoose
  .connect(process.env.DB_URI)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error('DB connection error:', err);
    process.exit(1);
  });
