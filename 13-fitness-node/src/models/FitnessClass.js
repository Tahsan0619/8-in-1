const mongoose = require('mongoose');

const scheduleSchema = new mongoose.Schema({
  day: { type: String },
  time: { type: String },
  recurring: { type: Boolean, default: true },
}, { _id: false });

const fitnessClassSchema = new mongoose.Schema(
  {
    name: { type: String, required: [true, 'Class name is required'], trim: true },
    description: { type: String },
    trainer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: [true, 'Trainer is required'] },
    schedule: [scheduleSchema],
    duration: { type: Number, required: [true, 'Duration is required'] },
    capacity: { type: Number, required: [true, 'Capacity is required'] },
    enrolledCount: { type: Number, default: 0 },
    location: { type: String },
    difficulty: { type: String, enum: ['beginner', 'intermediate', 'advanced'], default: 'beginner' },
    isActive: { type: Boolean, default: true },
    price: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model('FitnessClass', fitnessClassSchema);
