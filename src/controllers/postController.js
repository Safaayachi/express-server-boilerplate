let posts = [
	{ id: 1, title: "First Post", content: "This is the first post." },
	{ id: 2, title: "Second Post", content: "This is the second post." },
];

// Get all posts
const getAllPosts = (req, res) => {
	res.json(posts);
};

// Create a new post
const createPost = (req, res) => {
	const { title, content } = req.body;
	const newPost = { id: posts.length + 1, title, content };
	posts.push(newPost);
	res.status(201).json(newPost);
};

// Get a single post by ID
const getPostById = (req, res) => {
	const postId = parseInt(req.params.id);
	const post = posts.find((p) => p.id === postId);
	if (!post) {
		return res.status(404).json({ message: "Post not found" });
	}
	res.json(post);
};

module.exports = {
	getAllPosts,
	createPost,
	getPostById,
};
