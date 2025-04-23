import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://deygderin:Adedeji1997@ac-puai1cp.pmjvhod.mongodb.net/birthday-app?retryWrites=true&w=majority",
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
