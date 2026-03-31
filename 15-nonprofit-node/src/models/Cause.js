const mongoose = require('mongoose');

const causeSchema = new mongoose.Schema(
  {
    title: { type: String, required: [true, 'Title is required'], trim: true },
    description: { type: String, required: [true, 'Description is required'] },
    goalAmount: { type: Number, required: [true, 'Goal amount is required'] },
    raisedAmount: { type: Number, default: 0 },
    image: { type: String },
    category: { type: String, required: [true, 'Category is required'] },
    status: { type: String, enum: ['active', 'completed', 'paused'], default: 'active' },
    endDate: { type: Date },
    donorCount: { type: Number, default: 0 },
    isFeatured: { type: Boolean, default: false },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Cause', causeSchema);
