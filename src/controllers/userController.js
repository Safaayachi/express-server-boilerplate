const User = require("../models/User");

exports.getUsers = async (req, res, next) => {
	try {
		const users = await User.find();

		res.status(200).json({
			success: true,
			count: users.length,
			data: users,
		});
	} catch (error) {
		res.status(500).json({
			success: false,
			error: "Server Error",
		});
	}
};

exports.createUser = async (req, res, next) => {
	try {
		const user = await User.create(req.body);

		res.status(201).json({
			success: true,
			data: user,
		});
	} catch (error) {
		if (error.name === "ValidationError") {
			const messages = Object.values(error.errors).map(
				(val) => val.message
			);

			return res.status(400).json({
				success: false,
				error: messages,
			});
		} else {
			res.status(500).json({
				success: false,
				error: "Server Error",
			});
		}
	}
};
