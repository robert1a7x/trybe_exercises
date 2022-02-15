const mysql = require('mysql2/promise');

const connection = mysql.createPool({
	host: "localhost",
	user: "root",
	password: "Skadi@123",
	database: "model_examle"
});

module.exports = connection;