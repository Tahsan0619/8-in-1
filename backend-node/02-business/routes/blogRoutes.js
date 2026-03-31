const express = require('express');
const router = express.Router();
const { auth, adminOnly } = require('../middleware/auth');
const BlogPost = require('../models/BlogPost');

router.get('/', async (req, res) => {
  try {
    const { page = 1, limit = 10, category, featured } = req.query;
    const filter = { status: 'published' };
    if (category) filter.category = category;
    if (featured) filter.isFeatured = true;
    const [posts, total] = await Promise.all([
      BlogPost.find(filter).populate('author', 'name avatar').sort('-publishedAt').skip((page - 1) * limit).limit(Number(limit)),
      BlogPost.countDocuments(filter),
    ]);
    res.json({ posts, total, pages: Math.ceil(total / limit) });
  } catch (err) { res.status(500).json({ message: err.message }); }
});

router.get('/:slug', async (req, res) => {
  try {
    const post = await BlogPost.findOneAndUpdate({ slug: req.params.slug, status: 'published' }, { $inc: { views: 1 } }, { new: true }).populate('author', 'name avatar');
    if (!post) return res.status(404).json({ message: 'Post not found' });
    res.json(post);
  } catch (err) { res.status(500).json({ message: err.message }); }
});

router.post('/', auth, adminOnly, async (req, res) => {
  try {
    const post = await BlogPost.create({ ...req.body, author: req.user._id });
    res.status(201).json(post);
  } catch (err) { res.status(400).json({ message: err.message }); }
});

router.put('/:id', auth, adminOnly, async (req, res) => {
  try {
    const post = await BlogPost.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(post);
  } catch (err) { res.status(400).json({ message: err.message }); }
});

router.delete('/:id', auth, adminOnly, async (req, res) => {
  try {
    await BlogPost.findByIdAndDelete(req.params.id);
    res.json({ message: 'Post deleted' });
  } catch (err) { res.status(500).json({ message: err.message }); }
});
module.exports = router;
