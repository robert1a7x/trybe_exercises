const mysql = require('mysql2/promise');

const connection = mysql.createPool({
	user: 'root',
	host: 'localhost',
	password: 'Skadi@123',
	database: 'movies_fix',
});

module.exports = connection;