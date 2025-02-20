const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");

// Routes
router.get("/", postController.getAllPosts); // Get all posts
router.post("/", postController.createPost); // Create a new post
router.get("/:id", postController.getPostById); // Get a single post by ID

module.exports = router;
