const connection = require('./connection');

const getAllBooks = async () => {
	const [books] = await connection.execute('SELECT * FROM books');

	return books.map(({ id, title, author_id }) => ({
		id,
		title,
		authorId: author_id,
	}));
};

const getBookById = async (id) => {
	const [book] = await connection.execute('SELECT * FROM books WHERE id = ?;', [id]);

	if (book.length === 0) return null;

	return book.map(({ id, title, author_id }) => ({
		id,
		title,
		authorId: author_id,
	}));
};

const isValidBook = async (title, authorId) => {
	if (!title || typeof title !== 'string' || title.length < 3) return false;
	if (!authorId || typeof authorId !== 'number' || !(await getBookById(authorId))) return false;

	return true;
}

const createBook = async (title, authorId) => {
	await connection.execute('INSERT INTO model_examle.books (title, author_id) VALUES (?, ?)', [title, authorId]);
}

module.exports = {
	getAllBooks,
	getBookById,
	isValidBook,
	createBook,
}