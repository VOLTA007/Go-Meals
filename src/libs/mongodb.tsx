import mongoose, { Mongoose } from "mongoose";

async function connectToDatabase(): Promise<Mongoose> {
  try {
    const connection = await mongoose.connect(process.env.MONGODB_URI || "");
    console.log("Connected to MongoDB");
    return connection; // Return the connection for further use if needed
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error; // Rethrow error if connection fails
  }
}

export default connectToDatabase;
