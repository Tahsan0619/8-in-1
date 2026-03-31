const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema(
  {
    title: { type: String, required: [true, 'Course title is required'], trim: true },
    description: { type: String },
    instructor: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    category: { type: String, required: [true, 'Category is required'] },
    price: { type: Number, default: 0 },
    thumbnail: { type: String },
    totalDuration: { type: Number, default: 0 },
    level: {
      type: String,
      enum: ['beginner', 'intermediate', 'advanced'],
      default: 'beginner',
    },
    enrollments: { type: Number, default: 0 },
    isPublished: { type: Boolean, default: false },
    requirements: [{ type: String }],
    whatYoullLearn: [{ type: String }],
  },
  { timestamps: true }
);

module.exports = mongoose.model('Course', courseSchema);
