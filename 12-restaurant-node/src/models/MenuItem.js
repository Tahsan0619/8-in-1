const mongoose = require('mongoose');

const customizationSchema = new mongoose.Schema({
  name: { type: String },
  options: [{ label: { type: String }, price: { type: Number, default: 0 } }],
}, { _id: false });

const menuItemSchema = new mongoose.Schema(
  {
    name: { type: String, required: [true, 'Name is required'], trim: true },
    description: { type: String },
    price: { type: Number, required: [true, 'Price is required'] },
    category: { type: String, required: [true, 'Category is required'] },
    image: { type: String },
    isAvailable: { type: Boolean, default: true },
    customizations: [customizationSchema],
    preparationTime: { type: Number, default: 15 },
    calories: { type: Number },
    isVegetarian: { type: Boolean, default: false },
    isFeatured: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model('MenuItem', menuItemSchema);
