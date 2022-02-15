const express = require('express');
const bodyParser = require('body-parser');
const { findAddressByCep, createCep } = require('./Controllers/cepController');
const { errormiddleWare } = require('./Controllers/errorController');

const app = express();
app.use(bodyParser.json());

app.get('/cep/:cep', findAddressByCep);
app.post('/cep', createCep);

app.use(errormiddleWare);

app.get('/ping', (_req, res) => {
	res.status(200).json({ message: "pong!" });
})

app.listen(3000, () => console.log('rodando na porta 3000'));