const connection = require('./connection');

const formatUsers = ({ id, first_name: firstName, last_name: lastName, email }) => {
	// A única coisa que precisamos fazer agora é criar um objeto com os nomes dos campos alterados
	// e sem o campo passowrd
	return {
			id,
			firstName,
			lastName,
			email,
	};
}

const create = async ({ firstName, lastName, email, password }) => {
	const query = 'INSERT INTO users (first_name, last_name, email, password) VALUES (?, ?, ?, ?)'

	const [user] = await connection.execute(query, [firstName, lastName, email, password]);

	return {
		id: user.insertId,
		firstName,
		lastName,
		email,
	}
}

const getAll = async () => {
	const [users] = await connection.execute('SELECT * FROM users');

	return users.map(formatUsers);
}

const findById = async (id) => {
	const user = await connection.execute('SELECT * FROM users WHERE id = ?', [id])
	.then(([results]) => (results.length ? results[0] : null));


	if (!user) return null

	return formatUsers(user);
}

const updateUser = async (id, { firstName, lastName, email, password }) => {
	const query = 'UPDATE users SET first_name = ?, last_name = ?, email = ?, password = ? WHERE id = ?';

	await connection.execute(query, [firstName, lastName, email, password, id ]);

	return findById(id);
}

module.exports = {
	create,
	getAll,
	findById,
	updateUser,
}