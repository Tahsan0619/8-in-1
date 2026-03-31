const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
require('dotenv').config();

const authRoutes = require('./routes/auth');
const classRoutes = require('./routes/classes');
const errorHandler = require('./middleware/errorHandler');

const app = express();

app.use(helmet());
app.use(cors({ origin: process.env.CORS_ORIGIN || '*' }));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/auth', authRoutes);
app.use('/api/classes', classRoutes);
app.use('/api/memberships', (req, res) => res.status(501).json({ message: 'Memberships routes coming soon' }));
app.use('/api/trainers', (req, res) => res.status(501).json({ message: 'Trainers routes coming soon' }));
app.use('/api/workouts', (req, res) => res.status(501).json({ message: 'Workouts routes coming soon' }));

app.get('/health', (req, res) => res.json({ status: 'OK', project: 'FitZone Fitness API' }));

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
