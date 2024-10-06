import dbConnect from "../../lib/db";
import Product from "../../models/Product";

export default async function handler(req, res) {
  await dbConnect();

  const { id, category } = req.query; // Fetch by ID or category

  try {
    let products;

    if (id) {
      // Fetch a single product by ID
      products = await Product.findOne({ _id: id });
      if (!products) {
        return res.status(404).json({ message: "Product not found" });
      }
    } else if (category) {
      // Fetch products by category
      products = await Product.find({ category });
      if (!products.length) {
        return res
          .status(404)
          .json({ message: "No products found in this category" });
      }
    } else {
      // If neither ID nor category is provided, return all products (optional)
      products = await Product.find({});
    }

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Error fetching product", error });
  }
}
