const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// implemente seus testes aqui
// 1 - Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
assert.strictEqual(myFizzBuzz(30), 'fizzbuzz', 'O numero deve ser divisivel por 3 e 5 e retornar fizzbuzz');

// 2 - Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
assert.strictEqual(myFizzBuzz(9), 'fizz', 'O número deve ser divisivel por 3 e retonar fizz');

// 3 - Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
assert.strictEqual(myFizzBuzz(10), 'buzz', 'O número deve ser divisivel por 5 e retonar buzz');

// 4 - Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
assert.strictEqual(myFizzBuzz(4), 4, 'O número não deve ser divisivel nem por 3 nem por 5 e retonar ele mesmo');

// 5 - Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado
assert.strictEqual(myFizzBuzz('r'), false, 'Deve-se retornar false caso um número não seja informado');