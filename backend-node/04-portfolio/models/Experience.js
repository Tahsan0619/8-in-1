const mongoose = require('mongoose');

const experienceSchema = new mongoose.Schema({
  company: { type: String, required: true },
  position: { type: String, required: true },
  location: String,
  startDate: { type: Date, required: true },
  endDate: Date,
  isCurrent: { type: Boolean, default: false },
  description: String,
  technologies: [String],
  logo: String,
  order: { type: Number, default: 0 },
}, { timestamps: true });

module.exports = mongoose.model('Experience', experienceSchema);
