const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./config");
const cronJob = require("./cronJob");
const path = require("path");
const indexRoutes = require("./routes/index");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

connectDB();
app.use("/", indexRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
