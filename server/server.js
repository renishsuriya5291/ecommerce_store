const express = require("express");
const connectToMongo = require("./src/config/connectToMongo");
const cors = require("cors");
const cookieParser = require("cookie-parser"); // Import cookie-parser
const app = express();
const port = process.env.PORT || 5000;

require("dotenv").config();

const v1Routes = require("./src/routes/index");

// CORS configuration
const corsOptions = {
  origin: "http://localhost:3000", // Replace this with your frontend's URL in production
  credentials: true, // Allow credentials (cookies, authorization headers, etc.)
};

// Apply CORS middleware
app.use(cors(corsOptions));

// Parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use cookie-parser middleware
app.use(cookieParser()); // Initialize cookie-parser

// Connect to MongoDB
connectToMongo();

// Define routes
app.use("/api", v1Routes);

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
