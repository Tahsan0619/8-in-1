const Analytics = require('../models/Analytics');

// @desc    Get analytics (with optional date range)
// @route   GET /api/analytics
const getAnalytics = async (req, res, next) => {
  try {
    const query = {};
    if (req.query.startDate || req.query.endDate) {
      query.date = {};
      if (req.query.startDate) query.date.$gte = new Date(req.query.startDate);
      if (req.query.endDate) query.date.$lte = new Date(req.query.endDate);
    }
    const analytics = await Analytics.find(query).sort({ date: -1 });
    res.json({ success: true, count: analytics.length, data: analytics });
  } catch (err) {
    next(err);
  }
};

// @desc    Get analytics summary (totals)
// @route   GET /api/analytics/summary
const getAnalyticsSummary = async (req, res, next) => {
  try {
    const summary = await Analytics.aggregate([
      {
        $group: {
          _id: null,
          totalVisitors: { $sum: '$visitors' },
          totalPageViews: { $sum: '$pageViews' },
          totalConversions: { $sum: '$conversions' },
          totalRevenue: { $sum: '$revenue' },
          totalNewUsers: { $sum: '$newUsers' },
          avgBounceRate: { $avg: '$bounceRate' },
        },
      },
    ]);
    res.json({ success: true, data: summary[0] || {} });
  } catch (err) {
    next(err);
  }
};

// @desc    Get dashboard stats (last 30 days)
// @route   GET /api/analytics/dashboard-stats
const getDashboardStats = async (req, res, next) => {
  try {
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    const stats = await Analytics.find({ date: { $gte: thirtyDaysAgo } }).sort({ date: 1 });
    const summary = await Analytics.aggregate([
      { $match: { date: { $gte: thirtyDaysAgo } } },
      {
        $group: {
          _id: null,
          totalVisitors: { $sum: '$visitors' },
          totalRevenue: { $sum: '$revenue' },
          totalConversions: { $sum: '$conversions' },
          totalNewUsers: { $sum: '$newUsers' },
        },
      },
    ]);
    res.json({ success: true, data: { timeSeries: stats, summary: summary[0] || {} } });
  } catch (err) {
    next(err);
  }
};

// @desc    Create analytics record
// @route   POST /api/analytics
const createAnalytics = async (req, res, next) => {
  try {
    const record = await Analytics.create(req.body);
    res.status(201).json({ success: true, data: record });
  } catch (err) {
    next(err);
  }
};

// @desc    Update analytics record
// @route   PUT /api/analytics/:id
const updateAnalytics = async (req, res, next) => {
  try {
    const record = await Analytics.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!record) return res.status(404).json({ success: false, message: 'Analytics record not found' });
    res.json({ success: true, data: record });
  } catch (err) {
    next(err);
  }
};

// @desc    Delete analytics record
// @route   DELETE /api/analytics/:id
const deleteAnalytics = async (req, res, next) => {
  try {
    const record = await Analytics.findByIdAndDelete(req.params.id);
    if (!record) return res.status(404).json({ success: false, message: 'Analytics record not found' });
    res.json({ success: true, message: 'Analytics record deleted' });
  } catch (err) {
    next(err);
  }
};

module.exports = { getAnalytics, getAnalyticsSummary, getDashboardStats, createAnalytics, updateAnalytics, deleteAnalytics };
