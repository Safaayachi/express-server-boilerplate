const express = require("express");
const dotenv = require("dotenv");
const postRoutes = require("./routes/postRoutes");
const logger = require("./middleware/logger");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(logger); // Custom logging middleware

// Routes
app.use("/api/posts", postRoutes);

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
