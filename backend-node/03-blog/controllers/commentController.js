const Comment = require('../models/Comment');

exports.getComments = async (req, res) => {
  try {
    const comments = await Comment.find({ post: req.params.postId, status: 'approved', parentId: null })
      .populate('user', 'name avatar').sort('-createdAt');
    res.json(comments);
  } catch (err) { res.status(500).json({ message: err.message }); }
};

exports.addComment = async (req, res) => {
  try {
    const { postId, content, parentId } = req.body;
    const comment = await Comment.create({ post: postId, user: req.user._id, content, parentId: parentId || null });
    res.status(201).json(comment);
  } catch (err) { res.status(400).json({ message: err.message }); }
};

exports.deleteComment = async (req, res) => {
  try {
    const comment = await Comment.findOne({ _id: req.params.id, user: req.user._id });
    if (!comment) return res.status(404).json({ message: 'Comment not found' });
    await comment.deleteOne();
    res.json({ message: 'Comment deleted' });
  } catch (err) { res.status(500).json({ message: err.message }); }
};

exports.approveComment = async (req, res) => {
  try {
    const comment = await Comment.findByIdAndUpdate(req.params.id, { status: 'approved' }, { new: true });
    res.json(comment);
  } catch (err) { res.status(400).json({ message: err.message }); }
};
