const Cause = require('../models/Cause');

const getCauses = async (req, res, next) => {
  try {
    const { category, status } = req.query;
    const filter = {};
    if (category) filter.category = new RegExp(category, 'i');
    if (status) filter.status = status;
    const causes = await Cause.find(filter).populate('createdBy', 'name email').sort('-createdAt');
    res.json({ success: true, count: causes.length, data: causes });
  } catch (err) { next(err); }
};

const getCause = async (req, res, next) => {
  try {
    const cause = await Cause.findById(req.params.id).populate('createdBy', 'name email');
    if (!cause) return res.status(404).json({ success: false, message: 'Cause not found' });
    res.json({ success: true, data: cause });
  } catch (err) { next(err); }
};

const createCause = async (req, res, next) => {
  try {
    const cause = await Cause.create({ ...req.body, createdBy: req.user._id });
    res.status(201).json({ success: true, data: cause });
  } catch (err) { next(err); }
};

const updateCause = async (req, res, next) => {
  try {
    const cause = await Cause.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!cause) return res.status(404).json({ success: false, message: 'Cause not found' });
    res.json({ success: true, data: cause });
  } catch (err) { next(err); }
};

const deleteCause = async (req, res, next) => {
  try {
    const cause = await Cause.findByIdAndDelete(req.params.id);
    if (!cause) return res.status(404).json({ success: false, message: 'Cause not found' });
    res.json({ success: true, message: 'Cause deleted' });
  } catch (err) { next(err); }
};

const getFeaturedCauses = async (req, res, next) => {
  try {
    const causes = await Cause.find({ isFeatured: true, status: 'active' }).sort('-createdAt').limit(6);
    res.json({ success: true, count: causes.length, data: causes });
  } catch (err) { next(err); }
};

const donateToCause = async (req, res, next) => {
  try {
    const { amount } = req.body;
    if (!amount || amount <= 0) return res.status(400).json({ success: false, message: 'Valid donation amount is required' });
    const cause = await Cause.findById(req.params.id);
    if (!cause) return res.status(404).json({ success: false, message: 'Cause not found' });
    if (cause.status !== 'active') return res.status(400).json({ success: false, message: 'Cause is not accepting donations' });
    cause.raisedAmount += Number(amount);
    cause.donorCount += 1;
    if (cause.raisedAmount >= cause.goalAmount) cause.status = 'completed';
    await cause.save();
    res.json({ success: true, message: 'Donation recorded successfully', data: cause });
  } catch (err) { next(err); }
};

module.exports = { getCauses, getCause, createCause, updateCause, deleteCause, getFeaturedCauses, donateToCause };
