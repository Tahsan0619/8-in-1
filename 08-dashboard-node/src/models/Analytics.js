const mongoose = require('mongoose');

const analyticsSchema = new mongoose.Schema(
  {
    date: { type: Date, required: true, unique: true },
    visitors: { type: Number, default: 0 },
    pageViews: { type: Number, default: 0 },
    conversions: { type: Number, default: 0 },
    revenue: { type: Number, default: 0 },
    newUsers: { type: Number, default: 0 },
    bounceRate: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Analytics', analyticsSchema);
