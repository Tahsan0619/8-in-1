const Page = require('../models/Page');

const getPages = async (req, res, next) => {
  try {
    const { status } = req.query;
    const filter = {};
    if (status) filter.status = status;
    const pages = await Page.find(filter).populate('author', 'name email').sort('-createdAt');
    res.json({ success: true, count: pages.length, data: pages });
  } catch (err) { next(err); }
};

const getPageBySlug = async (req, res, next) => {
  try {
    const page = await Page.findOne({ slug: req.params.slug }).populate('author', 'name email');
    if (!page) return res.status(404).json({ success: false, message: 'Page not found' });
    res.json({ success: true, data: page });
  } catch (err) { next(err); }
};

const createPage = async (req, res, next) => {
  try {
    const page = await Page.create({ ...req.body, author: req.user._id });
    res.status(201).json({ success: true, data: page });
  } catch (err) { next(err); }
};

const updatePage = async (req, res, next) => {
  try {
    const page = await Page.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!page) return res.status(404).json({ success: false, message: 'Page not found' });
    res.json({ success: true, data: page });
  } catch (err) { next(err); }
};

const deletePage = async (req, res, next) => {
  try {
    const page = await Page.findByIdAndDelete(req.params.id);
    if (!page) return res.status(404).json({ success: false, message: 'Page not found' });
    res.json({ success: true, message: 'Page deleted' });
  } catch (err) { next(err); }
};

const publishPage = async (req, res, next) => {
  try {
    const page = await Page.findByIdAndUpdate(
      req.params.id,
      { status: 'published', publishedAt: new Date() },
      { new: true }
    );
    if (!page) return res.status(404).json({ success: false, message: 'Page not found' });
    res.json({ success: true, data: page });
  } catch (err) { next(err); }
};

module.exports = { getPages, getPageBySlug, createPage, updatePage, deletePage, publishPage };
