const mongoose = require('mongoose');

const tagSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true, trim: true },
  slug: { type: String, unique: true },
  postsCount: { type: Number, default: 0 },
}, { timestamps: true });

tagSchema.pre('save', function(next) {
  if (this.isModified('name') && !this.slug) this.slug = this.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  next();
});

module.exports = mongoose.model('Tag', tagSchema);
