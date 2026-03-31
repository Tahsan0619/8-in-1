const express = require('express');
const router = express.Router();
const {
  getServices,
  getService,
  createService,
  updateService,
  deleteService,
  getFeaturedServices,
} = require('../controllers/serviceController');
const { protect, authorize } = require('../middleware/auth');

router.get('/featured', getFeaturedServices);
router.route('/').get(getServices).post(protect, authorize('admin'), createService);
router
  .route('/:id')
  .get(getService)
  .put(protect, authorize('admin'), updateService)
  .delete(protect, authorize('admin'), deleteService);

module.exports = router;
