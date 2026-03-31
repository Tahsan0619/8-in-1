const mongoose = require('mongoose');
const testimonialSchema = new mongoose.Schema({
  name: { type: String, required: true }, position: String, company: String, avatar: String,
  content: { type: String, required: true }, rating: { type: Number, min: 1, max: 5, default: 5 },
  order: { type: Number, default: 0 }, isActive: { type: Boolean, default: true },
}, { timestamps: true });
module.exports = mongoose.model('Testimonial', testimonialSchema);
