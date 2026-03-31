const express = require('express');
const router = express.Router();
const { getPages, getPageBySlug, createPage, updatePage, deletePage, publishPage } = require('../controllers/pageController');
const { protect, authorize } = require('../middleware/auth');

router.get('/', getPages);
router.post('/', protect, authorize('admin'), createPage);
router.get('/:slug', getPageBySlug);
router.put('/:id', protect, authorize('admin'), updatePage);
router.delete('/:id', protect, authorize('admin'), deletePage);
router.put('/:id/publish', protect, authorize('admin'), publishPage);

module.exports = router;
