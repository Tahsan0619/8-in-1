const express = require('express');
const router = express.Router();
const {
  getForumPosts,
  getForumPost,
  createForumPost,
  updateForumPost,
  deleteForumPost,
  upvotePost,
  downvotePost,
} = require('../controllers/forumPostController');
const { protect } = require('../middleware/auth');

router.route('/').get(getForumPosts).post(protect, createForumPost);
router.route('/:id').get(getForumPost).put(protect, updateForumPost).delete(protect, deleteForumPost);
router.post('/:id/upvote', protect, upvotePost);
router.post('/:id/downvote', protect, downvotePost);

module.exports = router;
