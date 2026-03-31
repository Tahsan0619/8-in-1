const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
require('dotenv').config();

const authRoutes = require('./routes/auth');
const causeRoutes = require('./routes/causes');
const errorHandler = require('./middleware/errorHandler');

const app = express();

app.use(helmet());
app.use(cors({ origin: process.env.CORS_ORIGIN || '*' }));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/auth', authRoutes);
app.use('/api/causes', causeRoutes);
app.use('/api/donations', (req, res) => res.status(501).json({ message: 'Donations routes coming soon' }));
app.use('/api/volunteers', (req, res) => res.status(501).json({ message: 'Volunteers routes coming soon' }));
app.use('/api/events', (req, res) => res.status(501).json({ message: 'Events routes coming soon' }));

app.get('/health', (req, res) => res.json({ status: 'OK', project: 'HopeBridge Nonprofit API' }));

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
