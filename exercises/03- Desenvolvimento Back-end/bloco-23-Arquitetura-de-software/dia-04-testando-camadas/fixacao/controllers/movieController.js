const MoviesService = require('../services/movieService');

const create = async (req, res) => {
  const { title, directedBy, releaseYear } = req.body;

  const movie = await MoviesService
  .create({ title, directedBy, releaseYear });

  if (!movie) {
    return res.status(400).send('Dados inválidos');
  }

  return res.status(201).send('Filme criado com sucesso!');
};

const getAll = async (_req, res) => {
  const movies = await MoviesService.getAll();

  return res.status(200).json(movies);
};

const findById = async (req, res) => {
  const { id } = req.params;

  const movie = await MoviesService.findById(id);

  if(!movie) return res.status(404).send('Not found');

  return res.status(200).json(movie);
}

module.exports = {
  create,
  getAll,
  findById,
};