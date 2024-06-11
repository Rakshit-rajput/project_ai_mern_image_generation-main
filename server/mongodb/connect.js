import mongoose from "mongoose";

import dotenv from "dotenv";
dotenv.config();
const key = process.env.MONGO_URL;
const connectDB = () => {
  mongoose.set("strictQuery", true);
  mongoose
    .connect(key)
    .then(() => console.log("connected to mongo"))
    .catch((err) => {
      console.error("failed to connect with mongo");
      console.error(err);
    });
};

export default connectDB;
