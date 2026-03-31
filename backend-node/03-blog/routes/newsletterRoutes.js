const express = require('express');
const router = express.Router();
const Newsletter = require('../models/Newsletter');

router.post('/subscribe', async (req, res) => {
  try {
    const { email, name } = req.body;
    if (!email) return res.status(400).json({ message: 'Email is required' });
    if (await Newsletter.findOne({ email })) return res.status(400).json({ message: 'Already subscribed' });
    await Newsletter.create({ email, name });
    res.status(201).json({ message: 'Subscribed successfully' });
  } catch (err) { res.status(400).json({ message: err.message }); }
});
module.exports = router;
