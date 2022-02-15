const connection = require('./connection');

const getFullName = ({id, name, middleName, lastName }) => {
	const fullname = [name, middleName, lastName].filter(Boolean).join(' ');

	return {
		id,
		name,
		middleName,
		lastName,
		fullname,
	};
};

const serialize = ({ id, nome, nome_do_meio, sobrenome }) => {
	return {
		id,
		name: nome,
		middleName: nome_do_meio,
		lastName: sobrenome,
	};
};

const getAll = async () => {
	const [authors] = await connection.execute('SELECT id, nome, nome_do_meio, sobrenome FROM authors');

	return  authors.map(serialize).map(getFullName);
};

const getById = async (id) => {
	const [author] = await connection.execute('SELECT id, nome, nome_do_meio, sobrenome FROM authors WHERE id = ?;', [id]);

	if (author.length === 0) return null;

	const { name, middleName, lastName  } = author.map(serialize)[0];

	return getFullName({
		id,
		name,
		middleName,
		lastName,
	});
};

const isValid = (name, middleName, lastName) => {
	if (!name || typeof name !== 'string') return false;
	if (!lastName || typeof lastName !== 'string') return false;
	if (middleName && typeof middleName !== 'string') return false;

	return true;
};

const createAuthor = async (name, middleName, lastName) => {
	await connection.execute('INSERT INTO model_examle.authors (nome, nome_do_meio, sobrenome) VALUES (?, ?, ?)',
	[name, middleName, lastName]);
}

module.exports = {
	getAll,
	getById,
	isValid,
	createAuthor,
};