const connection = require('./connection');

const create = async ({ title, directedBy, releaseYear }) => {
	const query = 'INSERT INTO movies (title, directed_by, release_year) VALUES (?, ?, ?)';

	const [result] = await connection.execute(query, [title, directedBy, releaseYear]);

	return {
		id: result.insertId,
	}
};

const getAll = async () => {
	const [movies] = await connection.execute('SELECT * FROM movies');

	return movies;
};

const getById = async (paramId) => {
	const [movie] = await connection.execute('SELECT * FROM movies WHERE id = ?', [paramId]);

	if (movie.length === 0) return null;

	const { id, title, directed_by, release_year } = movie[0];

	return {
		id,
		title,
		directedBy: directed_by,
		releaseYear: release_year,
	}
}

module.exports = {
	create,
	getAll,
	getById,
}