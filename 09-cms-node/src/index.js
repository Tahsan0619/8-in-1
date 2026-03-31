const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
require('dotenv').config();

const authRoutes = require('./routes/auth');
const pageRoutes = require('./routes/pages');
const errorHandler = require('./middleware/errorHandler');

const app = express();

app.use(helmet());
app.use(cors({ origin: process.env.CORS_ORIGIN || '*' }));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/auth', authRoutes);
app.use('/api/pages', pageRoutes);
app.use('/api/posts', (req, res) => res.status(501).json({ message: 'Posts routes coming soon' }));
app.use('/api/media', (req, res) => res.status(501).json({ message: 'Media routes coming soon' }));
app.use('/api/settings', (req, res) => res.status(501).json({ message: 'Settings routes coming soon' }));

app.get('/health', (req, res) => res.json({ status: 'OK', project: 'SiteCraft CMS API' }));

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
