const service = require('../Services/cepService');
const Joi = require('joi');
const rescue = require('express-rescue');

const findAddressByCep = rescue(async (req, res, next) => {
	const { cep } = req.params;

	const adress = await service.findAddressByCep(cep);

	if (adress.error) return next(adress.error);

	return res.status(200).json(adress);
});

const createCep = rescue(async (req, res, next) => {
	const { cep, logradouro, bairro, localidade, uf } = req.body;

	const requiredNonEmptyString = Joi.string().not().empty().required();

  // Validamos o corpo da request
  const { error } = Joi.object({
    cep: Joi.string().regex(/\d{5}-\d{3}/).required(),
    logradouro: requiredNonEmptyString,
    bairro: requiredNonEmptyString,
    localidade: requiredNonEmptyString,
    uf: requiredNonEmptyString.length(2),
  }).validate({ cep, logradouro, bairro, localidade, uf });

	if (error) return next(error);

	const createdAdress = await service.createCep({ cep, logradouro, bairro, localidade, uf });

	if (createdAdress.error) return next(createdAdress.error);

	res.status(201).json(createdAdress);
});

module.exports = {
	findAddressByCep,
	createCep,
}