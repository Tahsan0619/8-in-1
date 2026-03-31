const express = require('express');
const router = express.Router();
const { auth, adminOnly } = require('../middleware/auth');
const Category = require('../models/Category');

router.get('/', async (req, res) => {
  try { res.json(await Category.find({ isActive: true }).sort('order')); }
  catch (err) { res.status(500).json({ message: err.message }); }
});
router.post('/', auth, adminOnly, async (req, res) => {
  try { res.status(201).json(await Category.create(req.body)); }
  catch (err) { res.status(400).json({ message: err.message }); }
});
router.put('/:id', auth, adminOnly, async (req, res) => {
  try { res.json(await Category.findByIdAndUpdate(req.params.id, req.body, { new: true })); }
  catch (err) { res.status(400).json({ message: err.message }); }
});
router.delete('/:id', auth, adminOnly, async (req, res) => {
  try { await Category.findByIdAndDelete(req.params.id); res.json({ message: 'Deleted' }); }
  catch (err) { res.status(500).json({ message: err.message }); }
});
module.exports = router;
