const Service = require('../models/Service');

// @desc    Get all services
// @route   GET /api/services
const getServices = async (req, res, next) => {
  try {
    const query = { isActive: true };
    if (req.query.category) query.category = req.query.category;
    const services = await Service.find(query).sort({ createdAt: -1 });
    res.json({ success: true, count: services.length, data: services });
  } catch (err) {
    next(err);
  }
};

// @desc    Get single service
// @route   GET /api/services/:id
const getService = async (req, res, next) => {
  try {
    const service = await Service.findById(req.params.id);
    if (!service) return res.status(404).json({ success: false, message: 'Service not found' });
    res.json({ success: true, data: service });
  } catch (err) {
    next(err);
  }
};

// @desc    Create service
// @route   POST /api/services
const createService = async (req, res, next) => {
  try {
    const service = await Service.create(req.body);
    res.status(201).json({ success: true, data: service });
  } catch (err) {
    next(err);
  }
};

// @desc    Update service
// @route   PUT /api/services/:id
const updateService = async (req, res, next) => {
  try {
    const service = await Service.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!service) return res.status(404).json({ success: false, message: 'Service not found' });
    res.json({ success: true, data: service });
  } catch (err) {
    next(err);
  }
};

// @desc    Delete service
// @route   DELETE /api/services/:id
const deleteService = async (req, res, next) => {
  try {
    const service = await Service.findByIdAndDelete(req.params.id);
    if (!service) return res.status(404).json({ success: false, message: 'Service not found' });
    res.json({ success: true, message: 'Service deleted' });
  } catch (err) {
    next(err);
  }
};

// @desc    Get featured services
// @route   GET /api/services/featured
const getFeaturedServices = async (req, res, next) => {
  try {
    const services = await Service.find({ isFeatured: true, isActive: true });
    res.json({ success: true, count: services.length, data: services });
  } catch (err) {
    next(err);
  }
};

module.exports = { getServices, getService, createService, updateService, deleteService, getFeaturedServices };
