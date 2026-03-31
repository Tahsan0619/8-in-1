const express = require('express');
const router = express.Router();
const {
  getAnalytics,
  getAnalyticsSummary,
  getDashboardStats,
  createAnalytics,
  updateAnalytics,
  deleteAnalytics,
} = require('../controllers/analyticsController');
const { protect, authorize } = require('../middleware/auth');

router.get('/summary', protect, getAnalyticsSummary);
router.get('/dashboard-stats', protect, getDashboardStats);
router.route('/').get(protect, authorize('admin'), getAnalytics).post(protect, authorize('admin'), createAnalytics);
router
  .route('/:id')
  .put(protect, authorize('admin'), updateAnalytics)
  .delete(protect, authorize('admin'), deleteAnalytics);

module.exports = router;
