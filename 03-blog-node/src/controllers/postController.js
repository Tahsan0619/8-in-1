const Post = require('../models/Post');

// @desc    Get all posts (admin)
// @route   GET /api/posts
const getPosts = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    const query = {};
    if (req.query.status) query.status = req.query.status;
    if (req.query.category) query.category = req.query.category;
    if (req.query.tag) query.tags = req.query.tag;
    const total = await Post.countDocuments(query);
    const posts = await Post.find(query).populate('author', 'name email avatar').skip(skip).limit(limit).sort({ createdAt: -1 });
    res.json({ success: true, count: posts.length, total, pages: Math.ceil(total / limit), page, data: posts });
  } catch (err) {
    next(err);
  }
};

// @desc    Get published posts (public)
// @route   GET /api/posts/published
const getPublishedPosts = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    const query = { status: 'published' };
    if (req.query.category) query.category = req.query.category;
    if (req.query.tag) query.tags = req.query.tag;
    const total = await Post.countDocuments(query);
    const posts = await Post.find(query).populate('author', 'name avatar').skip(skip).limit(limit).sort({ publishedAt: -1 });
    res.json({ success: true, count: posts.length, total, pages: Math.ceil(total / limit), page, data: posts });
  } catch (err) {
    next(err);
  }
};

// @desc    Get single post by slug
// @route   GET /api/posts/:slug
const getPost = async (req, res, next) => {
  try {
    const post = await Post.findOne({ slug: req.params.slug }).populate('author', 'name email avatar');
    if (!post) return res.status(404).json({ success: false, message: 'Post not found' });
    res.json({ success: true, data: post });
  } catch (err) {
    next(err);
  }
};

// @desc    Create post (auto-generate slug)
// @route   POST /api/posts
const createPost = async (req, res, next) => {
  try {
    req.body.author = req.user._id;
    if (!req.body.slug && req.body.title) {
      req.body.slug = req.body.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
    }
    const post = await Post.create(req.body);
    res.status(201).json({ success: true, data: post });
  } catch (err) {
    next(err);
  }
};

// @desc    Update post
// @route   PUT /api/posts/:id
const updatePost = async (req, res, next) => {
  try {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!post) return res.status(404).json({ success: false, message: 'Post not found' });
    res.json({ success: true, data: post });
  } catch (err) {
    next(err);
  }
};

// @desc    Delete post
// @route   DELETE /api/posts/:id
const deletePost = async (req, res, next) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    if (!post) return res.status(404).json({ success: false, message: 'Post not found' });
    res.json({ success: true, message: 'Post deleted' });
  } catch (err) {
    next(err);
  }
};

module.exports = { getPosts, getPublishedPosts, getPost, createPost, updatePost, deletePost };
