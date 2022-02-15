const express = require('express');
const bodyParser = require('body-parser');

const bookController = require('./controllers/booksController');

const app = express();

app.use(bodyParser.json());

app.get('/books', bookController.getAll);
app.get('/books/:id', bookController.getById);
app.post('/books', bookController.create);
app.put('/books/:id', bookController.update);
app.delete('/books/:id', bookController.deleteById);

app.listen(3000, () => console.log(`Ouvindo na porta 3000!`));