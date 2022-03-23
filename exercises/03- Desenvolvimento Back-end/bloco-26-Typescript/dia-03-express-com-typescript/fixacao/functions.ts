import fs from 'fs/promises';
import Book from './interfaces/Book';

const read = async (): Promise<Book[]> => {
	const data = await fs.readFile('./books.json', 'utf-8');

	const books = JSON.parse(data);

	return books;
};

const write = async (data: Book[]): Promise<any> => {
	await fs.writeFile('./books.json', JSON.stringify(data));
};

export {
	read,
	write,
}