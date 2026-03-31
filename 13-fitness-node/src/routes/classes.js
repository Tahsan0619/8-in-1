const express = require('express');
const router = express.Router();
const { getClasses, getClass, createClass, updateClass, deleteClass, enrollInClass, getClassSchedule } = require('../controllers/fitnessClassController');
const { protect, authorize } = require('../middleware/auth');

router.get('/', getClasses);
router.post('/', protect, authorize('admin'), createClass);
router.get('/:id', getClass);
router.put('/:id', protect, authorize('admin'), updateClass);
router.delete('/:id', protect, authorize('admin'), deleteClass);
router.post('/:id/enroll', protect, enrollInClass);
router.get('/:id/schedule', getClassSchedule);

module.exports = router;
