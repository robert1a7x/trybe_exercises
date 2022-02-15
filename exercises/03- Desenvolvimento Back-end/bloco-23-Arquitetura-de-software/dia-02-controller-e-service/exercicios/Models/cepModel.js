const connection = require('./connection');

const cepRegex = /\d{5}-\d{3}/;

const formatCep = (cep) => {
	if (cepRegex.test(cep)) return cep;

	return cep.replace(/(\d{5})(\d{3})/, '$1-$2');
};

const getNewCep  = ({ cep, logradouro, bairro, localidade, uf }) => ({
	cep: formatCep(cep),
	logradouro,
	bairro,
	localidade,
	uf,
});

const findAddressByCep = async (cep) => {
	const treatedCep = cep.replace('-', '');

	const query = 'SELECT cep, logradouro, bairro, localidade, uf FROM ceps WHERE cep = ?';

	const result = await connection.execute(query, [treatedCep])
		.then(([results]) => (results.length ? results[0] : null));

	if (!result) return null;

	return getNewCep(result);
};

const createCep = async ({ cep: rawCep, logradouro, bairro, localidade, uf }) => {
	const cep = rawCep.replace(/-/ig, '');
	const query = 'INSERT INTO ceps (cep, logradouro, bairro, localidade, uf) VALUES ( ?, ?, ?, ?, ?	)';
	
	await connection.execute(query, [cep, logradouro, bairro, localidade, uf]);

	return { cep, logradouro, bairro, localidade, uf };
}

module.exports = {
	findAddressByCep,
	createCep,
}