import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    availableSizes: { type: [String], required: true },
    imageUrl: { type: String, required: true },
    category: { type: String, required: true },
    // Optionally, you can add a slug field
    slug: { type: String, unique: true },
  },
  {
    timestamps: true, // Optional: adds createdAt and updatedAt fields
  }
);

const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
