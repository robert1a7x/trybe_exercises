const { Book } = require('../models');

const getAll = async (_req, res) => {
	try {
		const books = await Book.findAll()

		return res.status(200).json(books);
	} catch (error) {
		console.log(error.message)
		return res.status(500).json({ message: 'Algo deu errado' });
	}
};

const getById = async (req, res) => {
	try {
		const { id } = req.params;

		const book = await Book.findByPk(id)

		return res.status(200).json(book);
	} catch (error) {
		console.log(error.message)
		return res.status(500).json({ message: 'Algo deu errado' });
	}
};

const create = async (req, res) => {
	try {
		const { title, author, pageQuantity } = req.body;

		const createdBook = await Book.create({ title, author, pageQuantity });

		return res.status(201).json(createdBook);		
	} catch (error) {
		console.log(error.message)
		return res.status(500).json({ message: 'Algo deu errado' });
	}
};

const update = async (req, res) => {
	try {
		const { id } = req.params
		const { title, author, pageQuantity = 0 } = req.body;

		const updatedBook = await Book.update({ title, author, pageQuantity }, { where: { id } })

		return res.status(200).json(updatedBook);		
	} catch (error) {
		console.log(error.message)
		return res.status(500).json({ message: 'Algo deu errado' });
	}
};

const deleteById = async (req, res) => {
	try {
		const { id } = req.params

		const bookToDelete = await Book.findByPk(id);
		await bookToDelete.destroy();

		return res.status(200).json(bookToDelete);		
	} catch (error) {
		console.log(error.message)
		return res.status(500).json({ message: 'Algo deu errado' });
	}
};

module.exports = {
	getAll,
	getById,
	create,
	update,
	deleteById,
}