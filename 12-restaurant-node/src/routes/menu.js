const express = require('express');
const router = express.Router();
const { getMenuItems, getMenuItem, createMenuItem, updateMenuItem, deleteMenuItem, getMenuByCategory } = require('../controllers/menuItemController');
const { protect, authorize } = require('../middleware/auth');

router.get('/', getMenuItems);
router.get('/by-category', getMenuByCategory);
router.post('/', protect, authorize('admin'), createMenuItem);
router.get('/:id', getMenuItem);
router.put('/:id', protect, authorize('admin'), updateMenuItem);
router.delete('/:id', protect, authorize('admin'), deleteMenuItem);

module.exports = router;
