import User from "../models/User.js";
import gravatar from "gravatar";
import bcrypt from "bcryptjs";
import env from "../config/env.js";
import jwt from "jsonwebtoken";

//Test Users API
//route:    GET /api/users/test
//access:   Public
export const testMsgUsers = (req, res) => {
	res.json({ msg: "Users API is working." });
};

//Register user
//route:    POST /api/users/register
//access:   Public
export const registerUser = (req, res) => {
	//TRL
	User.findOne({ email: req.body.email }).then((user) => {
		if (user) {
			errors.email = "Email already exists";
			return res.status(400).json(errors);
		} else {
			const avatar = gravatar.url(req.body.email, {
				s: "200", // Size
				r: "pg", // Rating
				d: "mm" // Default
			});

			const newUser = new User({
				name: req.body.name,
				email: req.body.email,
				avatar,
				password: req.body.password
			});

			bcrypt.genSalt(10, (err, salt) => {
				bcrypt.hash(newUser.password, salt, (err, hash) => {
					if (err) throw err;
					newUser.password = hash;
					newUser
						.save()
						.then((user) => res.json(user))
						.catch((err) => console.log(err));
				});
			});
		}
	});
};

//Sign in / authenticate user and return a generated token
//route:    POST /api/users/login
//access:   Public
export const authUser = (req, res) => {
	const email = req.body.email;
	const password = req.body.password;

	// Find user by email
	User.findOne({ email })
		.then((user) => {
			if (!user) {
				errors.email = "User not found";
				return res.status(404).json(errors);
			}

			// Check Password
			bcrypt
				.compare(password, user.password)
				.then((isMatch) => {
					if (isMatch) {
						const payload = {
							id: user.id,
							name: user.name,
							avatar: user.avatar
						};

						// Sign Token
						jwt.sign(
							payload,
							env.SECRETORKEY,
							{ expiresIn: 86400 },
							(err, token) => {
								res.json({
									success: true,
									token: `Bearer ${token}`
								});
							}
						);
					} else {
						errors.password = "Password incorrect";
						return res.status(400).json(errors);
					}
				})
				.catch((err) => console.log(err));
		})
		.catch((err) => console.log(err));
};
