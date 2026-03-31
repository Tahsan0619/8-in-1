const mongoose = require('mongoose');

const forumPostSchema = new mongoose.Schema(
  {
    title: { type: String, required: [true, 'Title is required'], trim: true },
    content: { type: String, required: [true, 'Content is required'] },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    category: { type: String, required: [true, 'Category is required'] },
    tags: [{ type: String }],
    upvotes: { type: Number, default: 0 },
    downvotes: { type: Number, default: 0 },
    answersCount: { type: Number, default: 0 },
    views: { type: Number, default: 0 },
    isClosed: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model('ForumPost', forumPostSchema);
