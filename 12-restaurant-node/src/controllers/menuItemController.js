const MenuItem = require('../models/MenuItem');

const getMenuItems = async (req, res, next) => {
  try {
    const { category, isAvailable } = req.query;
    const filter = {};
    if (category) filter.category = new RegExp(category, 'i');
    if (isAvailable !== undefined) filter.isAvailable = isAvailable === 'true';
    const items = await MenuItem.find(filter).sort('category name');
    res.json({ success: true, count: items.length, data: items });
  } catch (err) { next(err); }
};

const getMenuItem = async (req, res, next) => {
  try {
    const item = await MenuItem.findById(req.params.id);
    if (!item) return res.status(404).json({ success: false, message: 'Menu item not found' });
    res.json({ success: true, data: item });
  } catch (err) { next(err); }
};

const createMenuItem = async (req, res, next) => {
  try {
    const item = await MenuItem.create(req.body);
    res.status(201).json({ success: true, data: item });
  } catch (err) { next(err); }
};

const updateMenuItem = async (req, res, next) => {
  try {
    const item = await MenuItem.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!item) return res.status(404).json({ success: false, message: 'Menu item not found' });
    res.json({ success: true, data: item });
  } catch (err) { next(err); }
};

const deleteMenuItem = async (req, res, next) => {
  try {
    const item = await MenuItem.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ success: false, message: 'Menu item not found' });
    res.json({ success: true, message: 'Menu item deleted' });
  } catch (err) { next(err); }
};

const getMenuByCategory = async (req, res, next) => {
  try {
    const categories = await MenuItem.distinct('category');
    const menu = await Promise.all(
      categories.map(async (cat) => ({
        category: cat,
        items: await MenuItem.find({ category: cat, isAvailable: true }),
      }))
    );
    res.json({ success: true, data: menu });
  } catch (err) { next(err); }
};

module.exports = { getMenuItems, getMenuItem, createMenuItem, updateMenuItem, deleteMenuItem, getMenuByCategory };
