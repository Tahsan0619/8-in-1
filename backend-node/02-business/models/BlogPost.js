const mongoose = require('mongoose');

const blogPostSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  slug: { type: String, unique: true },
  content: { type: String, required: true },
  excerpt: String,
  coverImage: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  category: String,
  tags: [String],
  status: { type: String, enum: ['draft', 'published'], default: 'draft' },
  isFeatured: { type: Boolean, default: false },
  views: { type: Number, default: 0 },
  publishedAt: Date,
}, { timestamps: true });

blogPostSchema.pre('save', function(next) {
  if (this.isModified('title') && !this.slug) {
    this.slug = this.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  }
  if (this.status === 'published' && !this.publishedAt) {
    this.publishedAt = new Date();
  }
  next();
});

module.exports = mongoose.model('BlogPost', blogPostSchema);
