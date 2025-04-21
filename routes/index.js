import express from "express";
import User from "../models/user.js";
import path from "path";
import { fileURLToPath } from "url"; // Import necessary functions
import { dirname } from "path";

const router = express.Router();

// Workaround to get __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

router.post("/submit", async (req, res) => {
  const { username, dob, email } = req.body;
  try {
    const user = new User({ username, dob, email });
    await user.save();
    res.send("Thank you for submitting your information!");
  } catch (err) {
    res.status(500).send("Error saving data to the database");
  }
});

export default router;
