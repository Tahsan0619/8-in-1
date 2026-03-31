const express = require('express');
const router = express.Router();
const {
  getCourses,
  getCourse,
  createCourse,
  updateCourse,
  deleteCourse,
  enrollInCourse,
  getEnrolledCourses,
} = require('../controllers/courseController');
const { protect, authorize } = require('../middleware/auth');

router.get('/my-courses', protect, getEnrolledCourses);
router.route('/').get(getCourses).post(protect, authorize('admin'), createCourse);
router
  .route('/:id')
  .get(getCourse)
  .put(protect, authorize('admin'), updateCourse)
  .delete(protect, authorize('admin'), deleteCourse);
router.post('/:id/enroll', protect, enrollInCourse);

module.exports = router;
