const express = require("express");
const router = express.Router();
const {
	getUsers,
	createUser,
	getUserById,
	updateUser,
} = require("../controllers/userController");

router.route("/").get(getUsers).post(createUser);
router.route("/:id").get(getUserById).put(updateUser);
module.exports = router;
