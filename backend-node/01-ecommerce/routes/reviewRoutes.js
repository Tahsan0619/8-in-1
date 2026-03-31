const express = require('express');
const router = express.Router();
const { auth } = require('../middleware/auth');
const Review = require('../models/Review');
const Product = require('../models/Product');

router.get('/product/:productId', async (req, res) => {
  try {
    const reviews = await Review.find({ product: req.params.productId, isApproved: true })
      .populate('user', 'name avatar').sort('-createdAt');
    res.json(reviews);
  } catch (err) { res.status(500).json({ message: err.message }); }
});

router.post('/', auth, async (req, res) => {
  try {
    const { productId, rating, comment } = req.body;
    const existing = await Review.findOne({ product: productId, user: req.user._id });
    if (existing) return res.status(400).json({ message: 'You have already reviewed this product' });
    const review = await Review.create({ product: productId, user: req.user._id, rating, comment });
    const reviews = await Review.find({ product: productId, isApproved: true });
    const avgRating = reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;
    await Product.findByIdAndUpdate(productId, { rating: avgRating, numReviews: reviews.length });
    res.status(201).json(review);
  } catch (err) { res.status(400).json({ message: err.message }); }
});

router.delete('/:id', auth, async (req, res) => {
  try {
    const review = await Review.findOne({ _id: req.params.id, user: req.user._id });
    if (!review) return res.status(404).json({ message: 'Review not found' });
    await review.deleteOne();
    res.json({ message: 'Review deleted' });
  } catch (err) { res.status(500).json({ message: err.message }); }
});

module.exports = router;
