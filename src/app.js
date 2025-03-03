const express = require("express");
const dotenv = require("dotenv");
const users = require("./routes/userRoutes");
const logger = require("./middleware/logger");
const connectDB = require("./config/database");

dotenv.config();
connectDB();
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(logger); // Custom logging middleware

// Routes
app.use("/api/users", users);

// 404 Handler
app.use((req, res) => {
	res.status(404).json({ message: "Route not found" });
});

// Error Handler
app.use((err, req, res, next) => {
	console.error(err.stack);
	res.status(500).json({ message: "Something went wrong!" });
});

module.exports = app;
