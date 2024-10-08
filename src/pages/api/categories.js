// pages/api/categories.js
import dbConnect from "@/lib/db"; // Ensure you have a utility to connect to your MongoDB
import Category from "@/models/Category"; // Adjust the path as necessary

export default async function handler(req, res) {
  await dbConnect(); // Connect to the database

  if (req.method === "GET") {
    try {
      const categories = await Category.find(); // Fetch all categories
      res.status(200).json(categories); // Return the found categories
    } catch (error) {
      console.error("Error fetching categories:", error);
      res.status(500).json({ error: "Error fetching categories" });
    }
  } else {
    res.setHeader("Allow", ["GET"]); // Allow only GET requests
    res.status(405).end(`Method ${req.method} Not Allowed`); // Handle other methods
  }
}
