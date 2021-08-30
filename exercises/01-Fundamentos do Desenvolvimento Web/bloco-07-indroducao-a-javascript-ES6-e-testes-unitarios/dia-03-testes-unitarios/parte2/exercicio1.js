// 1 - Escreva a função addOne para passar nos testes já implementados.
const assert = require('assert');

const addOne = (array) => {
	const newArray = []

	for (let i = 0; i < array.length; i += 1) {
		newArray.push(array[i] + 1);
	}
	return newArray;
};

const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);

assert.strictEqual(typeof addOne, 'function'); // check
assert.deepStrictEqual(output, expected); // check
assert.deepStrictEqual(myArray, unchanged); // check