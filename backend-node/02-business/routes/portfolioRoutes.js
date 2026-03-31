const express = require('express');
const router = express.Router();
const { auth, adminOnly } = require('../middleware/auth');
const Portfolio = require('../models/Portfolio');

router.get('/', async (req, res) => {
  try {
    const items = await Portfolio.find({ isActive: true }).sort('order');
    res.json(items);
  } catch (err) { res.status(500).json({ message: err.message }); }
});

router.get('/:slug', async (req, res) => {
  try {
    const item = await Portfolio.findOne({ slug: req.params.slug, isActive: true });
    if (!item) return res.status(404).json({ message: 'Portfolio item not found' });
    res.json(item);
  } catch (err) { res.status(500).json({ message: err.message }); }
});

router.post('/', auth, adminOnly, async (req, res) => {
  try { res.status(201).json(await Portfolio.create(req.body)); }
  catch (err) { res.status(400).json({ message: err.message }); }
});

router.put('/:id', auth, adminOnly, async (req, res) => {
  try { res.json(await Portfolio.findByIdAndUpdate(req.params.id, req.body, { new: true })); }
  catch (err) { res.status(400).json({ message: err.message }); }
});

router.delete('/:id', auth, adminOnly, async (req, res) => {
  try {
    await Portfolio.findByIdAndDelete(req.params.id);
    res.json({ message: 'Portfolio item deleted' });
  } catch (err) { res.status(500).json({ message: err.message }); }
});
module.exports = router;
