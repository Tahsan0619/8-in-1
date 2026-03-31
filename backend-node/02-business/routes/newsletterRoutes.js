const express = require('express');
const router = express.Router();
const { auth, adminOnly } = require('../middleware/auth');
const Newsletter = require('../models/Newsletter');

router.post('/subscribe', async (req, res) => {
  try {
    const { email, name } = req.body;
    if (!email) return res.status(400).json({ message: 'Email is required' });
    if (await Newsletter.findOne({ email })) return res.status(400).json({ message: 'Email already subscribed' });
    const subscriber = await Newsletter.create({ email, name });
    res.status(201).json({ message: 'Subscribed successfully', subscriber });
  } catch (err) { res.status(400).json({ message: err.message }); }
});

router.get('/subscribers', auth, adminOnly, async (req, res) => {
  try { res.json(await Newsletter.find().sort('-subscribedAt')); }
  catch (err) { res.status(500).json({ message: err.message }); }
});

router.delete('/unsubscribe/:email', async (req, res) => {
  try { await Newsletter.findOneAndDelete({ email: req.params.email }); res.json({ message: 'Unsubscribed' }); }
  catch (err) { res.status(500).json({ message: err.message }); }
});
module.exports = router;
