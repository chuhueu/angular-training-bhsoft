import mongoose from "mongoose";
var colors = require("colors");
const MONGO_URL =
  "mongodb+srv://hieu:hieu123@cluster0.rpdd9.mongodb.net/angular-training?retryWrites=true&w=majority";
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGO_URL!);
    console.log(
      colors.cyan.underline(`MongoDB Connected: ${conn.connection.host}`)
    );
  } catch (error: any) {
    console.log(colors.red.underline.bold(`Error: ${error.message}`));
    process.exit(1);
  }
};

export default connectDB;
