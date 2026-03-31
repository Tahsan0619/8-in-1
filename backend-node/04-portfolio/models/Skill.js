const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, enum: ['frontend', 'backend', 'tools', 'design', 'other'], default: 'other' },
  level: { type: Number, min: 0, max: 100, default: 80 },
  icon: String,
  order: { type: Number, default: 0 },
  isActive: { type: Boolean, default: true },
}, { timestamps: true });

module.exports = mongoose.model('Skill', skillSchema);
