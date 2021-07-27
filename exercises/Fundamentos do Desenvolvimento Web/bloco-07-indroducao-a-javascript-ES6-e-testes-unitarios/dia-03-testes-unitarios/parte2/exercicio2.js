// 2 - Escreva a função wordLengths para passar nos testes já implementados.
const assert = require('assert');

const wordLengths = (array) => {
	const newArray = [];

	for (let i = 0; i < array.length; i += 1) {
		newArray.push(array[i].length);
	}
	return newArray;
};

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];
assert.strictEqual(typeof wordLengths, 'function'); // check
const output = wordLengths(words);
assert.deepStrictEqual(output, expected); // check