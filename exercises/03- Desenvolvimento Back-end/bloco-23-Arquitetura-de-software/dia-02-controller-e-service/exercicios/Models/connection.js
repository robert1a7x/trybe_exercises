const mysql = require('mysql2/promise');

const connection = mysql.createPool({
	user: 'root',
	host: 'localhost',
	password: 'Skadi@123',
	database: 'cep_lookup',
});

module.exports = connection;