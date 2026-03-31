const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: [true, 'Product name is required'], trim: true },
    description: { type: String },
    price: { type: Number, required: [true, 'Price is required'] },
    images: [{ type: String }],
    seller: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: [true, 'Seller is required'] },
    category: { type: String, required: [true, 'Category is required'] },
    stock: { type: Number, default: 0 },
    ratings: { type: Number, default: 0, min: 0, max: 5 },
    numReviews: { type: Number, default: 0 },
    isActive: { type: Boolean, default: true },
    sku: { type: String },
    tags: [{ type: String }],
  },
  { timestamps: true }
);

productSchema.index({ name: 'text', description: 'text', category: 'text' });
productSchema.index({ seller: 1, category: 1 });

module.exports = mongoose.model('Product', productSchema);
