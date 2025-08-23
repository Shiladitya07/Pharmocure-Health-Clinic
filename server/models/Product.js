const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: String, required: true }, // You can use Number, but for now string is okay
  discount: { type: String, required: true },
  label: { type: String },
  category: { type: [String], required: true},
  img: { type: String }, // Image URL or path
}, { timestamps: true });

module.exports = mongoose.model("Product", productSchema);
