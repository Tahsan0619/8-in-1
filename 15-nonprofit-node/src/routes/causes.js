const express = require('express');
const router = express.Router();
const { getCauses, getCause, createCause, updateCause, deleteCause, getFeaturedCauses, donateToCause } = require('../controllers/causeController');
const { protect, authorize } = require('../middleware/auth');

router.get('/', getCauses);
router.get('/featured', getFeaturedCauses);
router.post('/', protect, authorize('admin'), createCause);
router.get('/:id', getCause);
router.put('/:id', protect, authorize('admin'), updateCause);
router.delete('/:id', protect, authorize('admin'), deleteCause);
router.post('/:id/donate', protect, donateToCause);

module.exports = router;
