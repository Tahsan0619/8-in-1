const express = require('express');
const router = express.Router();
const {
  getPosts,
  getPublishedPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
} = require('../controllers/postController');
const { protect, authorize } = require('../middleware/auth');

router.get('/published', getPublishedPosts);
router.route('/').get(protect, authorize('admin'), getPosts).post(protect, createPost);
router.get('/:slug', getPost);
router.put('/:id', protect, updatePost);
router.delete('/:id', protect, authorize('admin'), deletePost);

module.exports = router;
