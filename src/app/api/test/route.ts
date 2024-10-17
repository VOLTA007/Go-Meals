import { NextResponse } from "next/server";
import connectToDatabase from "@/libs/mongodb"; // Ensure this path is correct
import RestaurantModel from "@/models/Restaurant"; // Adjust path if necessary

export async function GET() {
  try {
    await connectToDatabase(); // Connect to the database
    const items = await RestaurantModel.find(); // Use Mongoose model to fetch all items
    return NextResponse.json(items); // Return the items as a JSON response
  } catch (error) {
    console.error("Error fetching items:", error);
    return NextResponse.error(); // Return an error response
  }
}
