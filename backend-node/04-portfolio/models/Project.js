const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  slug: { type: String, unique: true },
  description: { type: String, required: true },
  shortDescription: String,
  client: String,
  category: String,
  techStack: [String],
  image: String,
  gallery: [String],
  liveUrl: String,
  githubUrl: String,
  isFeatured: { type: Boolean, default: false },
  order: { type: Number, default: 0 },
  completedAt: Date,
  isActive: { type: Boolean, default: true },
}, { timestamps: true });

projectSchema.pre('save', function(next) {
  if (this.isModified('title') && !this.slug) this.slug = this.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  next();
});

module.exports = mongoose.model('Project', projectSchema);
