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
app.use('/api/projects', require('./routes/projectRoutes'));
app.use('/api/skills', require('./routes/skillRoutes'));
app.use('/api/experience', require('./routes/experienceRoutes'));
app.use('/api/education', require('./routes/educationRoutes'));
app.use('/api/contact', require('./routes/contactRoutes'));
app.use('/api/testimonials', require('./routes/testimonialRoutes'));

app.get('/api/health', (req, res) => res.json({ status: 'OK', service: 'Portfolio API' }));
app.use((err, req, res, next) => { res.status(err.status || 500).json({ message: err.message || 'Internal Server Error' }); });
app.use((req, res) => res.status(404).json({ message: 'Route not found' }));

const PORT = process.env.PORT || 5003;
mongoose.connect(process.env.MONGODB_URI)
  .then(() => { console.log('MongoDB connected'); app.listen(PORT, () => console.log(`Portfolio API running on port ${PORT}`)); })
  .catch(err => { console.error(err); process.exit(1); });
