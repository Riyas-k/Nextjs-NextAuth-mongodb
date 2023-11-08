import mongoose from "mongoose";

export const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Success db connection");
  } catch (error) {
    console.log("Failed db", error);
  }
};
