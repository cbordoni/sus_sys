var express = require('express');

var router = express.Router();

const hospitals = [
	{
		id: 1,
		date: new Date().toJSON(),
		name: 'Hospital III',
	},
	{
		id: 2,
		date: new Date().toJSON(),
		name: 'Hospital I',
	},
	{
		id: 3,
		date: new Date().toJSON(),
		name: 'Hospital II',
	},
];

router
	.route('/api/hospital/')
	.get((req, res) => {
		res.send(hospitals);
	})
	.post((req, res) => {
		res.send('Add a book');
	})
	.put((req, res) => {
		res.send('Update the book');
	});

module.exports = router;
