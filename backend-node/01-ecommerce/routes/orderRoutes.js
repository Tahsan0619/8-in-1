const express = require('express');
const router = express.Router();
const { auth, adminOnly } = require('../middleware/auth');
const {
  createOrder, getMyOrders, getOrder, cancelOrder,
  getAllOrders, updateOrderStatus
} = require('../controllers/orderController');

router.use(auth);
router.post('/', createOrder);
router.get('/my', getMyOrders);
router.get('/:id', getOrder);
router.patch('/:id/cancel', cancelOrder);
router.get('/', adminOnly, getAllOrders);
router.patch('/:id/status', adminOnly, updateOrderStatus);

module.exports = router;
