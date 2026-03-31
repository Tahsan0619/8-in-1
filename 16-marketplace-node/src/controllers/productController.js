const Product = require('../models/Product');

const getProducts = async (req, res, next) => {
  try {
    const { category, seller, page = 1, limit = 10 } = req.query;
    const filter = { isActive: true };
    if (category) filter.category = new RegExp(category, 'i');
    if (seller) filter.seller = seller;
    const skip = (Number(page) - 1) * Number(limit);
    const [products, total] = await Promise.all([
      Product.find(filter).populate('seller', 'name email').skip(skip).limit(Number(limit)).sort('-createdAt'),
      Product.countDocuments(filter),
    ]);
    res.json({ success: true, count: products.length, total, page: Number(page), data: products });
  } catch (err) { next(err); }
};

const getProduct = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id).populate('seller', 'name email');
    if (!product) return res.status(404).json({ success: false, message: 'Product not found' });
    res.json({ success: true, data: product });
  } catch (err) { next(err); }
};

const createProduct = async (req, res, next) => {
  try {
    const product = await Product.create({ ...req.body, seller: req.user._id });
    res.status(201).json({ success: true, data: product });
  } catch (err) { next(err); }
};

const updateProduct = async (req, res, next) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!product) return res.status(404).json({ success: false, message: 'Product not found' });
    res.json({ success: true, data: product });
  } catch (err) { next(err); }
};

const deleteProduct = async (req, res, next) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) return res.status(404).json({ success: false, message: 'Product not found' });
    res.json({ success: true, message: 'Product deleted' });
  } catch (err) { next(err); }
};

const getProductsBySeller = async (req, res, next) => {
  try {
    const products = await Product.find({ seller: req.params.sellerId, isActive: true })
      .populate('seller', 'name email')
      .sort('-createdAt');
    res.json({ success: true, count: products.length, data: products });
  } catch (err) { next(err); }
};

const searchProducts = async (req, res, next) => {
  try {
    const { q, category, minPrice, maxPrice } = req.query;
    const filter = { isActive: true };
    if (q) filter.$or = [{ name: new RegExp(q, 'i') }, { description: new RegExp(q, 'i') }, { tags: new RegExp(q, 'i') }];
    if (category) filter.category = new RegExp(category, 'i');
    if (minPrice || maxPrice) {
      filter.price = {};
      if (minPrice) filter.price.$gte = Number(minPrice);
      if (maxPrice) filter.price.$lte = Number(maxPrice);
    }
    const products = await Product.find(filter).populate('seller', 'name email').sort('-createdAt');
    res.json({ success: true, count: products.length, data: products });
  } catch (err) { next(err); }
};

module.exports = { getProducts, getProduct, createProduct, updateProduct, deleteProduct, getProductsBySeller, searchProducts };
