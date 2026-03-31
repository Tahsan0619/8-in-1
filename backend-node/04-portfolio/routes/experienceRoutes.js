const express = require('express');
const router = express.Router();
const { auth, adminOnly } = require('../middleware/auth');
const Experience = require('../models/Experience');

router.get('/', async (req, res) => {
  try { res.json(await Experience.find().sort('-startDate')); }
  catch (err) { res.status(500).json({ message: err.message }); }
});
router.post('/', auth, adminOnly, async (req, res) => {
  try { res.status(201).json(await Experience.create(req.body)); }
  catch (err) { res.status(400).json({ message: err.message }); }
});
router.put('/:id', auth, adminOnly, async (req, res) => {
  try { res.json(await Experience.findByIdAndUpdate(req.params.id, req.body, { new: true })); }
  catch (err) { res.status(400).json({ message: err.message }); }
});
router.delete('/:id', auth, adminOnly, async (req, res) => {
  try { await Experience.findByIdAndDelete(req.params.id); res.json({ message: 'Deleted' }); }
  catch (err) { res.status(500).json({ message: err.message }); }
});
module.exports = router;
