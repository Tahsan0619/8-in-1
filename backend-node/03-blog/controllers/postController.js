const Post = require('../models/Post');

exports.getPosts = async (req, res) => {
  try {
    const { page = 1, limit = 10, category, tag, author, search } = req.query;
    const filter = { status: 'published' };
    if (category) filter.category = category;
    if (tag) filter.tags = tag;
    if (author) filter.author = author;
    if (search) filter.$or = [{ title: new RegExp(search, 'i') }, { excerpt: new RegExp(search, 'i') }];
    const [posts, total] = await Promise.all([
      Post.find(filter).populate('author', 'name avatar').populate('category', 'name slug').sort('-publishedAt').skip((page - 1) * limit).limit(Number(limit)),
      Post.countDocuments(filter),
    ]);
    res.json({ posts, total, pages: Math.ceil(total / limit), page: Number(page) });
  } catch (err) { res.status(500).json({ message: err.message }); }
};

exports.getPost = async (req, res) => {
  try {
    const post = await Post.findOneAndUpdate({ slug: req.params.slug, status: 'published' }, { $inc: { views: 1 } }, { new: true })
      .populate('author', 'name avatar bio').populate('category', 'name slug').populate('tags', 'name slug');
    if (!post) return res.status(404).json({ message: 'Post not found' });
    res.json(post);
  } catch (err) { res.status(500).json({ message: err.message }); }
};

exports.createPost = async (req, res) => {
  try {
    const post = await Post.create({ ...req.body, author: req.user._id });
    res.status(201).json(post);
  } catch (err) { res.status(400).json({ message: err.message }); }
};

exports.updatePost = async (req, res) => {
  try {
    const post = await Post.findOneAndUpdate({ _id: req.params.id, author: req.user._id }, req.body, { new: true });
    if (!post) return res.status(404).json({ message: 'Post not found' });
    res.json(post);
  } catch (err) { res.status(400).json({ message: err.message }); }
};

exports.deletePost = async (req, res) => {
  try { await Post.findByIdAndDelete(req.params.id); res.json({ message: 'Post deleted' }); }
  catch (err) { res.status(500).json({ message: err.message }); }
};

exports.getFeatured = async (req, res) => {
  try { res.json(await Post.find({ isFeatured: true, status: 'published' }).populate('author', 'name avatar').limit(6)); }
  catch (err) { res.status(500).json({ message: err.message }); }
};

exports.getTrending = async (req, res) => {
  try { res.json(await Post.find({ status: 'published' }).sort('-views').limit(10).populate('author', 'name')); }
  catch (err) { res.status(500).json({ message: err.message }); }
};
