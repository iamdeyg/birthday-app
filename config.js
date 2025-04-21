import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/birthday-app", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected successfully ✅");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

export default connectDB;
