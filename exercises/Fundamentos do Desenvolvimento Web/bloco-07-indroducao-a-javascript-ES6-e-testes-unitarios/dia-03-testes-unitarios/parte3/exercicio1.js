// 1 - Use a variável parameter como parâmetro da função abaixo, escreva testes para verificar se a mesma está retornando como se vê na variável result e, caso não esteja, altere o código para que ele passe nos testes.
const assert = require('assert');

const greetPeople = (people) => {
  let greeting = 'Hello ';
	const newArray = []

  for (const person in people) {
    newArray.push(greeting + people[person]);
  }
  return newArray;
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];
const output = greetPeople(parameter);

assert.strictEqual(typeof(greetPeople), 'function'); // check
assert.deepStrictEqual(output, result); // check