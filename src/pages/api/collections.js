// pages/api/collections.js
import dbConnect from "../../lib/db";
// Ensure you have a utility to connect to your MongoDB
import Collection from "@/models/Collection"; // Adjust the path as necessary

export default async function handler(req, res) {
  await dbConnect(); // Connect to the database

  if (req.method === "GET") {
    try {
      const collections = await Collection.find(); // Fetch all collections
      res.status(200).json(collections); // Return the found collections
    } catch (error) {
      console.error("Error fetching collections:", error);
      res.status(500).json({ error: "Error fetching collections" });
    }
  } else {
    res.setHeader("Allow", ["GET"]); // Allow only GET requests
    res.status(405).end(`Method ${req.method} Not Allowed`); // Handle other methods
  }
}
