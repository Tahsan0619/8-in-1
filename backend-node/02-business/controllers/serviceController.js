const Service = require('../models/Service');

exports.getServices = async (req, res) => {
  try { res.json(await Service.find({ isActive: true }).sort('order')); }
  catch (err) { res.status(500).json({ message: err.message }); }
};
exports.getService = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);
    if (!service) return res.status(404).json({ message: 'Service not found' });
    res.json(service);
  } catch (err) { res.status(500).json({ message: err.message }); }
};
exports.createService = async (req, res) => {
  try { res.status(201).json(await Service.create(req.body)); }
  catch (err) { res.status(400).json({ message: err.message }); }
};
exports.updateService = async (req, res) => {
  try {
    const service = await Service.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!service) return res.status(404).json({ message: 'Service not found' });
    res.json(service);
  } catch (err) { res.status(400).json({ message: err.message }); }
};
exports.deleteService = async (req, res) => {
  try { await Service.findByIdAndDelete(req.params.id); res.json({ message: 'Service deleted' }); }
  catch (err) { res.status(500).json({ message: err.message }); }
};
exports.getFeatured = async (req, res) => {
  try { res.json(await Service.find({ isFeatured: true, isActive: true }).sort('order')); }
  catch (err) { res.status(500).json({ message: err.message }); }
};
