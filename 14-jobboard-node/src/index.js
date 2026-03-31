const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
require('dotenv').config();

const authRoutes = require('./routes/auth');
const jobRoutes = require('./routes/jobs');
const errorHandler = require('./middleware/errorHandler');

const app = express();

app.use(helmet());
app.use(cors({ origin: process.env.CORS_ORIGIN || '*' }));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/auth', authRoutes);
app.use('/api/jobs', jobRoutes);
app.use('/api/companies', (req, res) => res.status(501).json({ message: 'Companies routes coming soon' }));
app.use('/api/applications', (req, res) => res.status(501).json({ message: 'Applications routes coming soon' }));
app.use('/api/candidates', (req, res) => res.status(501).json({ message: 'Candidates routes coming soon' }));

app.get('/health', (req, res) => res.json({ status: 'OK', project: 'JobConnect BD API' }));

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
