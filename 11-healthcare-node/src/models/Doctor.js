const mongoose = require('mongoose');

const availableSlotSchema = new mongoose.Schema({
  day: { type: String },
  startTime: { type: String },
  endTime: { type: String },
}, { _id: false });

const doctorSchema = new mongoose.Schema(
  {
    name: { type: String, required: [true, 'Name is required'], trim: true },
    specialization: { type: String, required: [true, 'Specialization is required'] },
    department: { type: String },
    experience: { type: Number },
    bio: { type: String },
    image: { type: String },
    availableSlots: [availableSlotSchema],
    consultationFee: { type: Number, default: 0 },
    isActive: { type: Boolean, default: true },
    rating: { type: Number, default: 0 },
    numReviews: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Doctor', doctorSchema);
