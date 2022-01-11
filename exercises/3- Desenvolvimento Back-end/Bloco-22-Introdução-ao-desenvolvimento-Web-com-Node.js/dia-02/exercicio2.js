const fs = require('fs').promises;

// Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome . Por exemplo: 1 - Homer Simpson .
fs.readFile('simpsons.json', 'utf-8')
	.then((data) => JSON.parse(data))
	.then((simp) => simp.map(({ id, name }) => `${id} - ${name}`))
	.then((response) => {
		response.forEach(element => {
			console.log(element);
		});
	});

// Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida com os dados da personagem que possui o id informado. Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo "id não encontrado".
const searchChar = async (id) => {
	const responseRaw = await fs.readFile('simpsons.json', 'utf-8');
	const reponsejson = await JSON.parse(responseRaw);
	
	const simpson = reponsejson.find((elem) => elem.id === id.toString());
	
	if (!simpson) throw new Error('ID NAO ENCONTRADO');
	
	return console.log(simpson);
};

searchChar(7);

//Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.
const filterSimpsons = async () => {
	const responseRaw = await fs.readFile('simpsons.json', 'utf-8');
	const reponsejson = await JSON.parse(responseRaw);

	const filteredData = reponsejson.filter((simpson) => simpson.id !== '10' && simpson.id !== '6');

	await fs.writeFile('./simpsons.json', JSON.stringify(filteredData));
}

filterSimpsons();

//Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, chamado simpsonFamily.json , contendo as personagens com id de 1 a 4.
const createSimpsonsFamily = async () => {
	const responseRaw = await fs.readFile('simpsons.json', 'utf-8');
	const reponsejson = await JSON.parse(responseRaw);

	const family = reponsejson.filter((member) => [1, 2, 3, 4].includes(parseInt(member.id)));

	await fs.writeFile('./simpsonFamily.json', JSON.stringify(family));
}

createSimpsonsFamily();

// Crie uma função que adicione ao arquivo simpsonFamily.json o personagem Nelson Muntz .
const addNelson = async () => {
	const responseRaw = await fs.readFile('simpsonFamily.json', 'utf-8');
	const responsejson = await JSON.parse(responseRaw);

	responsejson.push({ "id": "8","name": "Nelson Muntz" });

	await fs.writeFile('./simpsonFamily.json', JSON.stringify(responsejson));
}

addNelson();

//Crie uma função que substitua o personagem Nelson Muntz pela personagem Maggie Simpson no arquivo simpsonFamily.json .
const replaceNelsonWithMaggie = async () => {
	const responseRaw = await fs.readFile('simpsonFamily.json', 'utf-8');
	const responsejson = await JSON.parse(responseRaw);

	const filterWithoutNelson = responsejson.filter((elem) => elem.id !== '8');

	filterWithoutNelson.push({ "id": "8","name": "Maggie Simpson" })

	await fs.writeFile('./simpsonFamily.json', JSON.stringify(filterWithoutNelson));
}

replaceNelsonWithMaggie();
