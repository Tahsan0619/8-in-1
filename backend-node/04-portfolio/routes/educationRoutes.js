const express = require('express');
const router = express.Router();
const { auth, adminOnly } = require('../middleware/auth');
const Education = require('../models/Education');

router.get('/', async (req, res) => {
  try { res.json(await Education.find().sort('-startYear')); }
  catch (err) { res.status(500).json({ message: err.message }); }
});
router.post('/', auth, adminOnly, async (req, res) => {
  try { res.status(201).json(await Education.create(req.body)); }
  catch (err) { res.status(400).json({ message: err.message }); }
});
router.put('/:id', auth, adminOnly, async (req, res) => {
  try { res.json(await Education.findByIdAndUpdate(req.params.id, req.body, { new: true })); }
  catch (err) { res.status(400).json({ message: err.message }); }
});
router.delete('/:id', auth, adminOnly, async (req, res) => {
  try { await Education.findByIdAndDelete(req.params.id); res.json({ message: 'Deleted' }); }
  catch (err) { res.status(500).json({ message: err.message }); }
});
module.exports = router;
