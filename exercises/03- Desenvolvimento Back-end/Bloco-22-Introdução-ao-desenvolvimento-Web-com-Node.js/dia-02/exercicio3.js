// Crie uma função que lê e escreve vários arquivos ao mesmo tempo.

const fs = require('fs').promises;

//Dado o seguinte array de strings: ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'] Faça com que sua função crie um arquivo contendo cada string, sendo o nome de cada arquivo igual a file<index + 1>.txt . Por exemplo, para a string "Finalmente", o nome do arquivo é file1.txt

const funcPromiseAll = async () => {
	const array = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];

	const finalArray = array.map((elem, i) => fs.writeFile(`file${i + 1}.txt`, elem));

	await Promise.all(finalArray);

	const fileNames = [
		'file1.txt',
		'file2.txt',
		'file3.txt',
		'file4.txt',
		'file5.txt',
	];

	const readFiles = await Promise.all(fileNames.map((elem) => fs.readFile(elem, 'utf-8')));

	//Programe sua função para que ela faça a leitura de todos os arquivos criados no item anterior, armazene essa informação e escreva em um arquivo chamado fileAll.txt .
	const concatFiles = readFiles.join(' ');

	await fs.writeFile('fileAll.txt', concatFiles);
}

funcPromiseAll();
