const express = require('express');
const router = express.Router();
const { auth, adminOnly } = require('../middleware/auth');
const { getPosts, getPost, createPost, updatePost, deletePost, getFeatured, getTrending } = require('../controllers/postController');

router.get('/', getPosts);
router.get('/featured', getFeatured);
router.get('/trending', getTrending);
router.get('/:slug', getPost);
router.post('/', auth, createPost);
router.put('/:id', auth, updatePost);
router.delete('/:id', auth, adminOnly, deletePost);
module.exports = router;
