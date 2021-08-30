// 4 - Escreva a função findTheNeedle para passar nos testes já implementados.
const assert = require('assert');

const findTheNeedle = (array, string) => {
	let index = -1;

	for (let i = 0; i < array.length; i += 1) {
		if (array[i] === string) index = i;
	}
	return index;
};

let words = ['house', 'train', 'slide', 'needle', 'book'];
let expected = 3;
let output = findTheNeedle(words, 'needle');
assert.strictEqual(output, expected); //check

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = 0;
output = findTheNeedle(words, 'plant');
assert.strictEqual(output, expected); //check

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = -1;
output = findTheNeedle(words, 'plat');
assert.strictEqual(output, expected); //check