const Job = require('../models/Job');

const getJobs = async (req, res, next) => {
  try {
    const { type, location, status = 'active', page = 1, limit = 10 } = req.query;
    const filter = { status };
    if (type) filter.type = type;
    if (location) filter.location = new RegExp(location, 'i');
    const skip = (Number(page) - 1) * Number(limit);
    const [jobs, total] = await Promise.all([
      Job.find(filter).populate('postedBy', 'name email').skip(skip).limit(Number(limit)).sort('-createdAt'),
      Job.countDocuments(filter),
    ]);
    res.json({ success: true, count: jobs.length, total, page: Number(page), data: jobs });
  } catch (err) { next(err); }
};

const getJob = async (req, res, next) => {
  try {
    const job = await Job.findById(req.params.id).populate('postedBy', 'name email');
    if (!job) return res.status(404).json({ success: false, message: 'Job not found' });
    res.json({ success: true, data: job });
  } catch (err) { next(err); }
};

const createJob = async (req, res, next) => {
  try {
    const job = await Job.create({ ...req.body, postedBy: req.user._id });
    res.status(201).json({ success: true, data: job });
  } catch (err) { next(err); }
};

const updateJob = async (req, res, next) => {
  try {
    const job = await Job.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!job) return res.status(404).json({ success: false, message: 'Job not found' });
    res.json({ success: true, data: job });
  } catch (err) { next(err); }
};

const deleteJob = async (req, res, next) => {
  try {
    const job = await Job.findByIdAndDelete(req.params.id);
    if (!job) return res.status(404).json({ success: false, message: 'Job not found' });
    res.json({ success: true, message: 'Job deleted' });
  } catch (err) { next(err); }
};

const searchJobs = async (req, res, next) => {
  try {
    const { q, type, location } = req.query;
    const filter = { status: 'active' };
    if (q) filter.$or = [{ title: new RegExp(q, 'i') }, { company: new RegExp(q, 'i') }, { description: new RegExp(q, 'i') }];
    if (type) filter.type = type;
    if (location) filter.location = new RegExp(location, 'i');
    const jobs = await Job.find(filter).populate('postedBy', 'name email').sort('-createdAt');
    res.json({ success: true, count: jobs.length, data: jobs });
  } catch (err) { next(err); }
};

const applyForJob = async (req, res, next) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) return res.status(404).json({ success: false, message: 'Job not found' });
    if (job.status !== 'active') return res.status(400).json({ success: false, message: 'Job is not accepting applications' });
    job.applicationsCount += 1;
    await job.save();
    res.json({ success: true, message: 'Application submitted successfully' });
  } catch (err) { next(err); }
};

module.exports = { getJobs, getJob, createJob, updateJob, deleteJob, searchJobs, applyForJob };
