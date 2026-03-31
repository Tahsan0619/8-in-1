const Course = require('../models/Course');

// @desc    Get all courses
// @route   GET /api/courses
const getCourses = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    const query = { isPublished: true };
    if (req.query.category) query.category = req.query.category;
    if (req.query.level) query.level = req.query.level;
    const total = await Course.countDocuments(query);
    const courses = await Course.find(query)
      .populate('instructor', 'name avatar')
      .skip(skip)
      .limit(limit)
      .sort({ createdAt: -1 });
    res.json({ success: true, count: courses.length, total, pages: Math.ceil(total / limit), page, data: courses });
  } catch (err) {
    next(err);
  }
};

// @desc    Get single course
// @route   GET /api/courses/:id
const getCourse = async (req, res, next) => {
  try {
    const course = await Course.findById(req.params.id).populate('instructor', 'name avatar');
    if (!course) return res.status(404).json({ success: false, message: 'Course not found' });
    res.json({ success: true, data: course });
  } catch (err) {
    next(err);
  }
};

// @desc    Create course
// @route   POST /api/courses
const createCourse = async (req, res, next) => {
  try {
    req.body.instructor = req.user._id;
    const course = await Course.create(req.body);
    res.status(201).json({ success: true, data: course });
  } catch (err) {
    next(err);
  }
};

// @desc    Update course
// @route   PUT /api/courses/:id
const updateCourse = async (req, res, next) => {
  try {
    const course = await Course.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!course) return res.status(404).json({ success: false, message: 'Course not found' });
    res.json({ success: true, data: course });
  } catch (err) {
    next(err);
  }
};

// @desc    Delete course
// @route   DELETE /api/courses/:id
const deleteCourse = async (req, res, next) => {
  try {
    const course = await Course.findByIdAndDelete(req.params.id);
    if (!course) return res.status(404).json({ success: false, message: 'Course not found' });
    res.json({ success: true, message: 'Course deleted' });
  } catch (err) {
    next(err);
  }
};

// @desc    Enroll in a course
// @route   POST /api/courses/:id/enroll
const enrollInCourse = async (req, res, next) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) return res.status(404).json({ success: false, message: 'Course not found' });
    course.enrollments += 1;
    await course.save();
    res.json({ success: true, message: 'Enrolled successfully', data: course });
  } catch (err) {
    next(err);
  }
};

// @desc    Get enrolled courses for current user
// @route   GET /api/courses/my-courses
const getEnrolledCourses = async (req, res, next) => {
  try {
    const courses = await Course.find({ isPublished: true })
      .populate('instructor', 'name avatar')
      .sort({ createdAt: -1 });
    res.json({ success: true, count: courses.length, data: courses });
  } catch (err) {
    next(err);
  }
};

module.exports = { getCourses, getCourse, createCourse, updateCourse, deleteCourse, enrollInCourse, getEnrolledCourses };
