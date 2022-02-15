const express = require('express');
const bodyParser = require('body-parser');
const loginController = require('./controllers/loginController');
const userController = require('./controllers/userControllers');
const { authMiddleware } = require('./middlewares/authMiddleware');
const { adminMiddleware } = require('./middlewares/adminMiddleware');

const app = express();

app.use(bodyParser.json());

app.post('/login', loginController.login);
app.get('/users/me', authMiddleware, userController.me);

app.get('/top-secret', authMiddleware, adminMiddleware, userController.topSecret);

app.listen(3000, () => console.log('Rodando na porta 3000'));