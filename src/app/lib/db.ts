import { MongoClient } from "mongodb";
import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  throw new Error("MONGO_URI is required");
}

export const connectToDB = async () => {
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  try {
    mongoose.connect(process.env.MONGO_URI ?? "");
    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("MongoDB connected successfully");
    });

    connection.on("error", (error) => {
      console.log(`MongoDB connection error. ${error}`);
      process.exit();
    });
  } catch (error) {
    console.log(error);
  }
};
