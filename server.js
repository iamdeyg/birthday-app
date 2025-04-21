import express from "express";
import bodyParser from "body-parser";
import connectDB from "./config.js"; // Import the ES module config
import { job as cronJob } from "./cronJob.js"; // Import the named export 'job'
import path from "path";
import indexRoutes from "./routes/index.js"; // Import the ES module routes
import { fileURLToPath } from "url";

// Use fileURLToPath and import.meta.url to get the directory name in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

connectDB();
app.use("/", indexRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
