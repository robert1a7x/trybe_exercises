const Cep = require('../Models/cepModel');

const cepRegex = /\d{5}-?\d{3}/;

const findAddressByCep = async (cepSearched) => {
	if (!cepRegex.test(cepSearched)) {
		return {
			error: {
				code: 'invalidData',
				message: 'CEP inválido'
			}
		}
	}

	const cep = await Cep.findAddressByCep(cepSearched);

	if (!cep) {
		return {
			error: {
				code: 'notFound',
				message: 'CEP nao encontrado'
			}
		}
	}

	return cep;
};

const createCep = async ({ cep, logradouro, bairro, localidade, uf }) => {
	const exists = await Cep.findAddressByCep(cep);

	if (exists) {
		return {
			error: {
				code: 'alreadyExists',
				message: 'CEP já existente',
			},
		};
	};

	return Cep.createCep({ cep, logradouro, bairro, localidade, uf });
}

module.exports = {
	findAddressByCep,
	createCep,
}