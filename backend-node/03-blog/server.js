require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
app.use(cors({ origin: process.env.CLIENT_URL || '*' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/posts', require('./routes/postRoutes'));
app.use('/api/comments', require('./routes/commentRoutes'));
app.use('/api/categories', require('./routes/categoryRoutes'));
app.use('/api/tags', require('./routes/tagRoutes'));
app.use('/api/newsletter', require('./routes/newsletterRoutes'));

app.get('/api/health', (req, res) => res.json({ status: 'OK', service: 'The Inkwell Blog API' }));

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({ message: err.message || 'Internal Server Error' });
});
app.use((req, res) => res.status(404).json({ message: 'Route not found' }));

const PORT = process.env.PORT || 5002;
mongoose.connect(process.env.MONGODB_URI)
  .then(() => { console.log('MongoDB connected'); app.listen(PORT, () => console.log(`The Inkwell Blog API running on port ${PORT}`)); })
  .catch(err => { console.error('MongoDB connection error:', err); process.exit(1); });
