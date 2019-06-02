var mysql = require('mysql');

var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'root',
	database: 'sus',
});

connection.connect(err => {
	if (err) throw err;

	console.log('Successfully connected to DB');
});

module.exports = connection;
