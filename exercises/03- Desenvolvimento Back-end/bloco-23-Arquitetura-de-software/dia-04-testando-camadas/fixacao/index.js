const express = require('express');
const bodyParser = require('body-parser');

const movieController = require('./controllers/movieController');

const app = express();

app.use(bodyParser.json());

app.get('/movies', movieController.getAll);
app.post('/movies', movieController.create);
app.get('/movies/:id', movieController.findById);

app.listen(3000, () => console.log('rodando na porta 3000'));