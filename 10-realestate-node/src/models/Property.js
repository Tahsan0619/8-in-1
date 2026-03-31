const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema(
  {
    title: { type: String, required: [true, 'Title is required'], trim: true },
    description: { type: String },
    price: { type: Number, required: [true, 'Price is required'] },
    type: {
      type: String,
      enum: ['house', 'apartment', 'condo', 'land', 'commercial'],
      required: [true, 'Property type is required'],
    },
    status: {
      type: String,
      enum: ['for-sale', 'for-rent', 'sold', 'rented'],
      default: 'for-sale',
    },
    bedrooms: { type: Number },
    bathrooms: { type: Number },
    area: { type: Number },
    images: [{ type: String }],
    location: {
      address: { type: String },
      city: { type: String },
      state: { type: String },
      lat: { type: Number },
      lng: { type: Number },
    },
    agent: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

propertySchema.index({ 'location.city': 1, type: 1, status: 1 });
propertySchema.index({ price: 1 });

module.exports = mongoose.model('Property', propertySchema);
