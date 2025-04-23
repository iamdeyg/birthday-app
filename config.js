import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://deygderin:Adedeji1997@cluster0.pmjvhod.mongodb.net/birthday-app",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("MongoDB Connected successfully ✅");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

export default connectDB;
