// ./auth/validateJWT.js
const jwt = require('jsonwebtoken');

const { User } = require('../models/');

const segredo = 'seusecretdetoken';

module.exports = async (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(400).json({ message: 'Token não encontrado ou informado' });
  }

  try {
    const { id } = jwt.verify(token, segredo);

    const user = await User.findOne({ where: { id } });

    if (!token || !id || !user) throw Error;

    if (!user) {
      return res
        .status(401)
        .json({ message: 'Erro ao procurar usuário do token.' });
    }

    if (req.params && req.params.id && Number(id) !== Number(req.params.id))
      return res.status(401).json({ message: 'Acesso negado' });

    req.user = user;

    next();
  } catch (err) {
    return res.status(401).json({ message: err.message });
  }
};