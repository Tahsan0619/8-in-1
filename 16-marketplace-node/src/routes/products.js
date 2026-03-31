const express = require('express');
const router = express.Router();
const {
  getProducts, getProduct, createProduct, updateProduct,
  deleteProduct, getProductsBySeller, searchProducts,
} = require('../controllers/productController');
const { protect, authorize } = require('../middleware/auth');

router.get('/', getProducts);
router.get('/search', searchProducts);
router.post('/', protect, createProduct);
router.get('/seller/:sellerId', getProductsBySeller);
router.get('/:id', getProduct);
router.put('/:id', protect, updateProduct);
router.delete('/:id', protect, authorize('admin'), deleteProduct);

module.exports = router;
