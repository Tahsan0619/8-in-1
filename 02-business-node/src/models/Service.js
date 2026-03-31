const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema(
  {
    title: { type: String, required: [true, 'Service title is required'], trim: true },
    description: { type: String },
    icon: { type: String },
    features: [{ type: String }],
    category: { type: String },
    price: { type: Number },
    isFeatured: { type: Boolean, default: false },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Service', serviceSchema);
