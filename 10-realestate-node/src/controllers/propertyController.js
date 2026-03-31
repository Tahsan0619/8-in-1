const Property = require('../models/Property');

const getProperties = async (req, res, next) => {
  try {
    const { type, status, city, minPrice, maxPrice, page = 1, limit = 10 } = req.query;
    const filter = { isActive: true };
    if (type) filter.type = type;
    if (status) filter.status = status;
    if (city) filter['location.city'] = new RegExp(city, 'i');
    if (minPrice || maxPrice) {
      filter.price = {};
      if (minPrice) filter.price.$gte = Number(minPrice);
      if (maxPrice) filter.price.$lte = Number(maxPrice);
    }
    const skip = (Number(page) - 1) * Number(limit);
    const [properties, total] = await Promise.all([
      Property.find(filter).populate('agent', 'name email phone').skip(skip).limit(Number(limit)).sort('-createdAt'),
      Property.countDocuments(filter),
    ]);
    res.json({ success: true, count: properties.length, total, page: Number(page), data: properties });
  } catch (err) { next(err); }
};

const getProperty = async (req, res, next) => {
  try {
    const property = await Property.findById(req.params.id).populate('agent', 'name email phone');
    if (!property) return res.status(404).json({ success: false, message: 'Property not found' });
    res.json({ success: true, data: property });
  } catch (err) { next(err); }
};

const createProperty = async (req, res, next) => {
  try {
    const property = await Property.create({ ...req.body, agent: req.user._id });
    res.status(201).json({ success: true, data: property });
  } catch (err) { next(err); }
};

const updateProperty = async (req, res, next) => {
  try {
    const property = await Property.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!property) return res.status(404).json({ success: false, message: 'Property not found' });
    res.json({ success: true, data: property });
  } catch (err) { next(err); }
};

const deleteProperty = async (req, res, next) => {
  try {
    const property = await Property.findByIdAndDelete(req.params.id);
    if (!property) return res.status(404).json({ success: false, message: 'Property not found' });
    res.json({ success: true, message: 'Property deleted' });
  } catch (err) { next(err); }
};

const searchProperties = async (req, res, next) => {
  try {
    const { q, city, type, minPrice, maxPrice } = req.query;
    const filter = { isActive: true };
    if (q) filter.$or = [{ title: new RegExp(q, 'i') }, { description: new RegExp(q, 'i') }];
    if (city) filter['location.city'] = new RegExp(city, 'i');
    if (type) filter.type = type;
    if (minPrice || maxPrice) {
      filter.price = {};
      if (minPrice) filter.price.$gte = Number(minPrice);
      if (maxPrice) filter.price.$lte = Number(maxPrice);
    }
    const properties = await Property.find(filter).populate('agent', 'name email').sort('-createdAt');
    res.json({ success: true, count: properties.length, data: properties });
  } catch (err) { next(err); }
};

const getFeaturedProperties = async (req, res, next) => {
  try {
    const properties = await Property.find({ isActive: true, status: 'for-sale' })
      .populate('agent', 'name email')
      .sort('-createdAt')
      .limit(6);
    res.json({ success: true, count: properties.length, data: properties });
  } catch (err) { next(err); }
};

module.exports = { getProperties, getProperty, createProperty, updateProperty, deleteProperty, searchProperties, getFeaturedProperties };
