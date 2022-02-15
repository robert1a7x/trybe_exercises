const mysql = require('mysql2/promise');

const connection = mysql.createPool({
	user: 'root',
	password: 'Skadi@123',
	host: 'localhost',
	database: 'users_exercices'
});

module.exports = connection;