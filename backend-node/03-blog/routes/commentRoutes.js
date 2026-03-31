const express = require('express');
const router = express.Router();
const { auth, adminOnly } = require('../middleware/auth');
const { getComments, addComment, deleteComment, approveComment } = require('../controllers/commentController');

router.get('/post/:postId', getComments);
router.post('/', auth, addComment);
router.delete('/:id', auth, deleteComment);
router.patch('/:id/approve', auth, adminOnly, approveComment);
module.exports = router;
