// index.js
const express = require('express');
const bodyParser = require('body-parser');
const { getAll, getById, isValid, createAuthor } = require('./models/authors');
const { getAllBooks, getBookById, isValidBook, createBook } = require('./models/Book');

const app = express();

app.use(bodyParser.json());

app.get('/authors', async (_req, res) => {
	const authors = await getAll();
	
	res.status(200).json(authors);
});

app.get('/books', async (req, res) => {
	const { author_id } = req.query;

	const books =  author_id ? await getBookById(author_id) : await getAllBooks();

	res.status(200).json(books);
});

app.get('/authors/:id', async (req, res) => {
	const { id } = req.params;

	const author = await getById(+id);

	if (!author) return res.status(404).json({ message: 'Not found' });

	res.status(200).json(author);
});

app.get('/books/:id', async (req, res) => {
	const { id } = req.params;

	const book = await getBookById(id);

	if (!book) return res.status(404).json({ message: 'Not found' });

	res.status(200).json(book);
});

app.post('/authors', async (req, res) => {
	const { nome, nome_do_meio, sobrenome  } = req.body;

	if (!isValid(nome, nome_do_meio, sobrenome)) return res.status(400).json({ message: 'Dados invalidos' });

	await createAuthor(nome, nome_do_meio, sobrenome);

	res.status(201).json({ message: 'Autor criado com sucesso' });
});

app.post('/books', async (req, res) => {
	const { title, author_id} = req.body;

	if (!await isValidBook(title, author_id)) return res.status(400).json({ message: 'Dados invalidos' });

	await createBook(title, author_id);

	res.status(201).json({ message: 'Livro criado com sucesso' });
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log(`Ouvindo a porta ${PORT}`);
});