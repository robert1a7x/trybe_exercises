// 3 - Escreva a função sumAllNumbers para passar nos testes já implementados.
const assert = require('assert');

const sumAllNumbers = (array) => {
	let sum = 0;

	for (let i = 0; i < array.length; i += 1) {
		sum += array[i];
	}
	return sum;
};

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = sumAllNumbers(numbers);

assert.strictEqual(typeof sumAllNumbers, 'function'); //check
assert.strictEqual(output, expected); //check