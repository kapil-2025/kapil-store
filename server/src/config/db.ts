import mongoose from "mongoose";

export async function connectDB(): Promise<void> {
  try {
    const uri = process.env.MONGO_URI;
    if (!uri) {
      throw new Error("MONGO_URI .env mai nahi hai ");
    }
    await mongoose.connect(uri);
    console.log("MongoDB connected");
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error("MongoDB connection failed:", message);
    process.exit(1);
  }
}
