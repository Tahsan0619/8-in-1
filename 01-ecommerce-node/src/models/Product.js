const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: [true, 'Product name is required'], trim: true },
    description: { type: String },
    price: { type: Number, required: [true, 'Price is required'], min: [0, 'Price cannot be negative'] },
    discountPrice: { type: Number, min: [0, 'Discount price cannot be negative'] },
    images: [{ type: String }],
    category: { type: String, required: [true, 'Category is required'] },
    brand: { type: String },
    stock: { type: Number, default: 0 },
    ratings: { type: Number, default: 0, min: 0, max: 5 },
    numReviews: { type: Number, default: 0 },
    isFeatured: { type: Boolean, default: false },
    seller: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Product', productSchema);
