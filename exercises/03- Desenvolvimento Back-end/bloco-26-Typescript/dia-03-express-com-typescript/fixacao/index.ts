import express, { Request, Response } from "express";
import BooksRoute from './routes/books';

const app = express();

app.use(express.json())

const PORT = 8000;

app.get("/", (req: Request, res: Response) => {
    res.send("Express + TypeScript")
});

app.use(BooksRoute);

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});