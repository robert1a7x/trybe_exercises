const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui

// 1 - Teste se o retorno de sum(4, 5) é 9
assert.strictEqual(sum(4, 5), 9, 'Resultado não é igual a 9');

// 2 - Teste se o retorno de sum(0, 0) é 0
assert.strictEqual(sum(0, 0), 0, 'Resultado não é igual a 0');

// 3 - Teste se a função sum lança um erro quando os parâmetros são 4 e "5", teste se a mensagem de erro é "parameters must be numbers"
assert.strictEqual(sum(4, '5'), 9, 'Resultado não é igual a 9');