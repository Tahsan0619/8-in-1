const FitnessClass = require('../models/FitnessClass');

const getClasses = async (req, res, next) => {
  try {
    const { difficulty, trainer } = req.query;
    const filter = { isActive: true };
    if (difficulty) filter.difficulty = difficulty;
    if (trainer) filter.trainer = trainer;
    const classes = await FitnessClass.find(filter).populate('trainer', 'name email').sort('-createdAt');
    res.json({ success: true, count: classes.length, data: classes });
  } catch (err) { next(err); }
};

const getClass = async (req, res, next) => {
  try {
    const fitnessClass = await FitnessClass.findById(req.params.id).populate('trainer', 'name email');
    if (!fitnessClass) return res.status(404).json({ success: false, message: 'Class not found' });
    res.json({ success: true, data: fitnessClass });
  } catch (err) { next(err); }
};

const createClass = async (req, res, next) => {
  try {
    const fitnessClass = await FitnessClass.create(req.body);
    res.status(201).json({ success: true, data: fitnessClass });
  } catch (err) { next(err); }
};

const updateClass = async (req, res, next) => {
  try {
    const fitnessClass = await FitnessClass.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!fitnessClass) return res.status(404).json({ success: false, message: 'Class not found' });
    res.json({ success: true, data: fitnessClass });
  } catch (err) { next(err); }
};

const deleteClass = async (req, res, next) => {
  try {
    const fitnessClass = await FitnessClass.findByIdAndDelete(req.params.id);
    if (!fitnessClass) return res.status(404).json({ success: false, message: 'Class not found' });
    res.json({ success: true, message: 'Class deleted' });
  } catch (err) { next(err); }
};

const enrollInClass = async (req, res, next) => {
  try {
    const fitnessClass = await FitnessClass.findById(req.params.id);
    if (!fitnessClass) return res.status(404).json({ success: false, message: 'Class not found' });
    if (fitnessClass.enrolledCount >= fitnessClass.capacity) {
      return res.status(400).json({ success: false, message: 'Class is full' });
    }
    fitnessClass.enrolledCount += 1;
    await fitnessClass.save();
    res.json({ success: true, message: 'Enrolled successfully', data: fitnessClass });
  } catch (err) { next(err); }
};

const getClassSchedule = async (req, res, next) => {
  try {
    const fitnessClass = await FitnessClass.findById(req.params.id).select('name schedule duration location');
    if (!fitnessClass) return res.status(404).json({ success: false, message: 'Class not found' });
    res.json({ success: true, data: fitnessClass });
  } catch (err) { next(err); }
};

module.exports = { getClasses, getClass, createClass, updateClass, deleteClass, enrollInClass, getClassSchedule };
