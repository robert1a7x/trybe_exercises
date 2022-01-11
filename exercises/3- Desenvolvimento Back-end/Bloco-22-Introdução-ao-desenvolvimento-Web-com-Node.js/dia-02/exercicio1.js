// Crie uma função que recebe três parâmetros retorna uma Promise .
const sumAndMultiply = (n1, n2, n3) => {
	return new Promise((resolve, reject) => {
		if ( typeof n1 !== 'number' || typeof n2 !== 'number' || typeof n3 !== 'number'  ) {
			reject('Informe apenas números');
		}

		const result = (n1 + n2) * n3;

		if (result < 500) reject('Valor muito baixo');

		resolve(result);
	});
};

// Escreva um código para consumir a função construída no exercício anterior.
const randomizeNumbers = () => {
	return Math.floor(Math.random() * 50 + 1);
}

const randomNumbers = Array.from({ length: 3 }).map(randomizeNumbers);


// Reescreva o código do exercício anterior para que utilize async/await .
const main = async () => {
	try {
		const response = await sumAndMultiply(...randomNumbers);
		console.log(response)
	} catch (error) {
		console.log(error)
	}
}

main();
