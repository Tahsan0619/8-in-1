const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema(
  {
    title: { type: String, required: [true, 'Job title is required'], trim: true },
    company: { type: String, required: [true, 'Company is required'] },
    location: { type: String, required: [true, 'Location is required'] },
    type: {
      type: String,
      enum: ['full-time', 'part-time', 'contract', 'freelance', 'remote'],
      required: [true, 'Job type is required'],
    },
    salaryMin: { type: Number },
    salaryMax: { type: Number },
    description: { type: String, required: [true, 'Job description is required'] },
    requirements: [{ type: String }],
    benefits: [{ type: String }],
    status: { type: String, enum: ['active', 'closed', 'draft'], default: 'active' },
    postedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    expiresAt: { type: Date },
    applicationsCount: { type: Number, default: 0 },
  },
  { timestamps: true }
);

jobSchema.index({ title: 'text', description: 'text', company: 'text' });

module.exports = mongoose.model('Job', jobSchema);
