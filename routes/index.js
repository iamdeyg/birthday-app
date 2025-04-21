const express = require("express");
const User = require("../models/user");
const path = require("path");
const router = express.Router();

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

module.exports = router;
