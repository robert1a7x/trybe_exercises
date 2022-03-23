import { Router, Request, Response } from "express";
import Book from "../interfaces/Book";
import { read, write } from '../functions';
import statusCode from '../enums/StatusCode';
import validationBook from "../middlewares/validationBook";

const router = Router();

router.get('/books', async (_req: Request, res: Response) => {
	const books = await read();
	
	return res.status(statusCode.OK).json(books);
});

router.get('/books/:isbn', async (req: Request, res: Response) => {
	const { isbn } = req.params;

	const books = await read();

	const book = books.find((book) => book.isbn === isbn);

	if (!book) return res.status(statusCode.NOT_FOUND).json({ message: 'Book not found' });

	return res.status(statusCode.OK).json(book);
});

router.post('/books', validationBook, async (req: Request, res: Response) => {
	const book: Book = req.body;

	const books = await read();

	books.push(book);

	await write(books);

	return res.status(statusCode.CREATED).json(book);
});

router.put('/books/:isbn', validationBook, async (req: Request, res: Response) => {
	const { isbn } =req.params;
	const editedBook: Book = req.body;

	const books = await read();

	const index = books.findIndex((book) => book.isbn === isbn);

	if (index === -1) return res.status(statusCode.NOT_FOUND).json({ message: 'Book not found' });

	books.splice(index, 1, editedBook);

	await write(books);

	return res.status(statusCode.OK).json(editedBook);
});

router.delete('/books/:isbn', async (req: Request, res: Response) => {
	const { isbn } = req.params;

	const books = await read();

	const index = books.findIndex((book) => book.isbn === isbn);

	books.splice(index, 1);
	
	await write(books);

	return res.status(statusCode.NO_CONTENT).end();
});

export default router;