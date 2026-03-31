const express = require('express');
const router = express.Router();
const {
  getBookings,
  getBooking,
  createBooking,
  updateBooking,
  cancelBooking,
  getMyBookings,
} = require('../controllers/bookingController');
const { protect, authorize } = require('../middleware/auth');

router.get('/my', protect, getMyBookings);
router.route('/').get(protect, authorize('admin'), getBookings).post(protect, createBooking);
router.route('/:id').get(protect, getBooking).put(protect, authorize('admin'), updateBooking);
router.post('/:id/cancel', protect, cancelBooking);

module.exports = router;
