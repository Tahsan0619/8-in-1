const express = require('express');
const router = express.Router();
const {
  getProperties, getProperty, createProperty, updateProperty,
  deleteProperty, searchProperties, getFeaturedProperties,
} = require('../controllers/propertyController');
const { protect, authorize } = require('../middleware/auth');

router.get('/', getProperties);
router.get('/search', searchProperties);
router.get('/featured', getFeaturedProperties);
router.post('/', protect, createProperty);
router.get('/:id', getProperty);
router.put('/:id', protect, updateProperty);
router.delete('/:id', protect, authorize('admin'), deleteProperty);

module.exports = router;
