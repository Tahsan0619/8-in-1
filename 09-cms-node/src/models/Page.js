const mongoose = require('mongoose');

const pageSchema = new mongoose.Schema(
  {
    title: { type: String, required: [true, 'Title is required'], trim: true },
    slug: { type: String, required: [true, 'Slug is required'], unique: true, lowercase: true, trim: true },
    content: { type: String },
    template: { type: String, default: 'default' },
    seoTitle: { type: String },
    seoDescription: { type: String },
    status: { type: String, enum: ['draft', 'published'], default: 'draft' },
    publishedAt: { type: Date },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Page', pageSchema);
