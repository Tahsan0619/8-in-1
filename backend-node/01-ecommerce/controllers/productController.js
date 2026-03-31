const Product = require('../models/Product');

exports.getProducts = async (req, res) => {
  try {
    const { page = 1, limit = 12, category, minPrice, maxPrice, search, sort = '-createdAt' } = req.query;
    const filter = { isActive: true };
    if (category) filter.category = category;
    if (minPrice || maxPrice) filter.price = {};
    if (minPrice) filter.price.$gte = Number(minPrice);
    if (maxPrice) filter.price.$lte = Number(maxPrice);
    if (search) filter.$or = [{ name: new RegExp(search, 'i') }, { description: new RegExp(search, 'i') }];

    const [products, total] = await Promise.all([
      Product.find(filter).populate('category', 'name slug').sort(sort).skip((page - 1) * limit).limit(Number(limit)),
      Product.countDocuments(filter),
    ]);
    res.json({ products, total, pages: Math.ceil(total / limit), page: Number(page) });
  } catch (err) { res.status(500).json({ message: err.message }); }
};

exports.getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate('category', 'name slug');
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (err) { res.status(500).json({ message: err.message }); }
};

exports.createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (err) { res.status(400).json({ message: err.message }); }
};

exports.updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (err) { res.status(400).json({ message: err.message }); }
};

exports.deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: 'Product deleted' });
  } catch (err) { res.status(500).json({ message: err.message }); }
};

exports.getFeatured = async (req, res) => {
  try {
    const products = await Product.find({ isFeatured: true, isActive: true }).populate('category', 'name').limit(8);
    res.json(products);
  } catch (err) { res.status(500).json({ message: err.message }); }
};

exports.searchProducts = async (req, res) => {
  try {
    const { q } = req.query;
    const products = await Product.find({ $or: [{ name: new RegExp(q, 'i') }, { description: new RegExp(q, 'i') }], isActive: true }).populate('category', 'name').limit(20);
    res.json(products);
  } catch (err) { res.status(500).json({ message: err.message }); }
};
