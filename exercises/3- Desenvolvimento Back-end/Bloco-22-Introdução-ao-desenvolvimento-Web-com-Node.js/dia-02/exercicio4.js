const fs = require('fs').promises;
const readline = require('readline');

//Crie um script que mostre na tela o conteúdo de um arquivo escolhido pelo usuário:

const question = (mensagem) => {
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout
	});

	return new Promise((resolve) => {
		rl.question(mensagem, (resposta) => {
			rl.close();

			resolve(resposta);
		})
	})
}

const start = async () => {
	const fileName = await question('Digite o caminho do arquivo que deseja ler: ');

	try {
		const file = await fs.readFile(fileName, 'utf-8');
		console.log(file);
	} catch (error) {	
		console.log('Arquivo nao existente', error);
	}
}

start();
