const express = require('express');
const router = express.Router();
const { auth, adminOnly } = require('../middleware/auth');
const Testimonial = require('../models/Testimonial');

router.get('/', async (req, res) => {
  try { res.json(await Testimonial.find({ isActive: true }).sort('order')); }
  catch (err) { res.status(500).json({ message: err.message }); }
});
router.post('/', auth, adminOnly, async (req, res) => {
  try { res.status(201).json(await Testimonial.create(req.body)); }
  catch (err) { res.status(400).json({ message: err.message }); }
});
router.delete('/:id', auth, adminOnly, async (req, res) => {
  try { await Testimonial.findByIdAndDelete(req.params.id); res.json({ message: 'Deleted' }); }
  catch (err) { res.status(500).json({ message: err.message }); }
});
module.exports = router;
