const express = require('express');
const router = express.Router();
const { auth, adminOnly } = require('../middleware/auth');
const {
  getProducts, getProduct, createProduct, updateProduct, deleteProduct,
  getFeatured, searchProducts
} = require('../controllers/productController');

router.get('/', getProducts);
router.get('/featured', getFeatured);
router.get('/search', searchProducts);
router.get('/:id', getProduct);
router.post('/', auth, adminOnly, createProduct);
router.put('/:id', auth, adminOnly, updateProduct);
router.delete('/:id', auth, adminOnly, deleteProduct);

module.exports = router;
