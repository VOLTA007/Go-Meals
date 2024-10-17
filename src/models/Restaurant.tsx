import mongoose, { Schema, Document } from "mongoose";

// Define the interface for the restaurant document
interface Restaurant extends Document {
  name: string; // Restaurant name
}

// Create the schema for the restaurant
const restaurantSchema: Schema<Restaurant> = new Schema({
  name: { type: String, required: true }, // Define name field
});

// Create the model with the collection name specified
const RestaurantModel = mongoose.models.Restaurant || mongoose.model<Restaurant>("Restaurant", restaurantSchema, "restaurants");

export default RestaurantModel;
