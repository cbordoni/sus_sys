const connection = require('../dbconnection');
const auth = require('./auth');

module.exports = {
	get: (req, res) => {
		connection.query('SELECT * FROM user ORDER BY name', (err, results) => {
			if (err) {
				console.log(err);
				res.sendStatus(404);
			} else res.send(results);
		});
	},
	create: (req, res) => {
		const { name, cpf, email, password } = req.body;

		const hash = auth.getHash(password);

		const query =
			'INSERT INTO user (name, cpf, email, password) VALUES (?, ?, ?, ?)';
		const user = [name.trim(), cpf, email.trim(), hash];

		connection.query(query, user, (err, results) => {
			if (err) {
				console.log(err);
				res.sendStatus(404);
			} else res.json({ id: results.insertId });
		});
	},
	update: (req, res) => {
		const { name, cpf, email, password } = req.body;
		const { id } = req.params;

		const user = {
			name,
			email,
			cpf,
		};

		if (password) user.password = auth.getHash(password);

		const query = 'UPDATE user SET ? WHERE id = ?';

		connection.query(query, [user, id], (err, results) => {
			if (err) res.sendStatus(404);
			else res.send({ ...user, id });
		});
	},
	delete: (req, res) => {
		res.send({});
	},
};
