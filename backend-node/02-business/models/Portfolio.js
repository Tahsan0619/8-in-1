const mongoose = require('mongoose');

const portfolioSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, unique: true },
  description: String,
  client: String,
  category: String,
  image: String,
  gallery: [String],
  liveUrl: String,
  order: { type: Number, default: 0 },
  isActive: { type: Boolean, default: true },
  completedAt: Date,
  technologies: [String],
}, { timestamps: true });

portfolioSchema.pre('save', function(next) {
  if (this.isModified('title') && !this.slug) {
    this.slug = this.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  }
  next();
});

module.exports = mongoose.model('Portfolio', portfolioSchema);
