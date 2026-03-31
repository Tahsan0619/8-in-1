const ForumPost = require('../models/ForumPost');

// @desc    Get all forum posts
// @route   GET /api/forum-posts
const getForumPosts = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    const query = {};
    if (req.query.category) query.category = req.query.category;
    if (req.query.tag) query.tags = req.query.tag;
    const total = await ForumPost.countDocuments(query);
    const posts = await ForumPost.find(query)
      .populate('author', 'name avatar')
      .skip(skip)
      .limit(limit)
      .sort({ createdAt: -1 });
    res.json({ success: true, count: posts.length, total, pages: Math.ceil(total / limit), page, data: posts });
  } catch (err) {
    next(err);
  }
};

// @desc    Get single forum post
// @route   GET /api/forum-posts/:id
const getForumPost = async (req, res, next) => {
  try {
    const post = await ForumPost.findById(req.params.id).populate('author', 'name avatar');
    if (!post) return res.status(404).json({ success: false, message: 'Forum post not found' });
    post.views += 1;
    await post.save();
    res.json({ success: true, data: post });
  } catch (err) {
    next(err);
  }
};

// @desc    Create forum post
// @route   POST /api/forum-posts
const createForumPost = async (req, res, next) => {
  try {
    req.body.author = req.user._id;
    const post = await ForumPost.create(req.body);
    res.status(201).json({ success: true, data: post });
  } catch (err) {
    next(err);
  }
};

// @desc    Update forum post
// @route   PUT /api/forum-posts/:id
const updateForumPost = async (req, res, next) => {
  try {
    const post = await ForumPost.findById(req.params.id);
    if (!post) return res.status(404).json({ success: false, message: 'Forum post not found' });
    if (post.author.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
      return res.status(403).json({ success: false, message: 'Not authorized to update this post' });
    }
    const updated = await ForumPost.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    res.json({ success: true, data: updated });
  } catch (err) {
    next(err);
  }
};

// @desc    Delete forum post
// @route   DELETE /api/forum-posts/:id
const deleteForumPost = async (req, res, next) => {
  try {
    const post = await ForumPost.findById(req.params.id);
    if (!post) return res.status(404).json({ success: false, message: 'Forum post not found' });
    if (post.author.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
      return res.status(403).json({ success: false, message: 'Not authorized to delete this post' });
    }
    await ForumPost.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: 'Forum post deleted' });
  } catch (err) {
    next(err);
  }
};

// @desc    Upvote forum post
// @route   POST /api/forum-posts/:id/upvote
const upvotePost = async (req, res, next) => {
  try {
    const post = await ForumPost.findByIdAndUpdate(
      req.params.id,
      { $inc: { upvotes: 1 } },
      { new: true }
    );
    if (!post) return res.status(404).json({ success: false, message: 'Forum post not found' });
    res.json({ success: true, data: post });
  } catch (err) {
    next(err);
  }
};

// @desc    Downvote forum post
// @route   POST /api/forum-posts/:id/downvote
const downvotePost = async (req, res, next) => {
  try {
    const post = await ForumPost.findByIdAndUpdate(
      req.params.id,
      { $inc: { downvotes: 1 } },
      { new: true }
    );
    if (!post) return res.status(404).json({ success: false, message: 'Forum post not found' });
    res.json({ success: true, data: post });
  } catch (err) {
    next(err);
  }
};

module.exports = { getForumPosts, getForumPost, createForumPost, updateForumPost, deleteForumPost, upvotePost, downvotePost };
