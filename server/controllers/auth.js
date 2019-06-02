const connection = require('../dbconnection');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports = {
	verifyToken: (req, res, next) => {
		const token = req.headers['authorization'];

		if (typeof token !== 'undefined') {
			jwt.verify(token, process.env.JWT_SECRET, (err, data) => {
				if (err) {
					res.sendStatus(403);
					return;
				}

				req.token = token;
				next();
			});
		} else {
			res.sendStatus(403);
		}
	},
	login: (req, res) => {
		const { email, password } = req.body;

		connection.query(
			'SELECT * FROM user WHERE email = ?',
			[email],
			(err, response) => {
				if (err) console.log(err);

				if (response.length) {
					let user = response.shift();

					if (bcrypt.compareSync(password, user.password)) {
						delete user.password;

						jwt.sign(
							{ user },
							process.env.JWT_SECRET,
							{ expiresIn: 30 * 60 },
							(err, token) => {
								res.json({ token, user });
							},
						);
					} else {
						res.sendStatus(404);
					}
				} else {
					res.sendStatus(404);
				}
			},
		);
	},
	getUser: (req, res) => {
		jwt.verify(req.token, process.env.JWT_SECRET, (err, authData) => {
			if (err) {
				res.sendStatus(403);
				console.log(err);
			} else res.send(authData);
		});
	},
	getHash: pass => {
		return bcrypt.hashSync(pass, bcrypt.genSaltSync(10));
	},
};
