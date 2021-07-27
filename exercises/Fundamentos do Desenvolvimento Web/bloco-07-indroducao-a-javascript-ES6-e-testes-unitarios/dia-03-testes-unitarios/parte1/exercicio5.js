const assert = require('assert');

const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

// implemente seus testes aqui
// 1 - Compare dois objetos para verificar se são idênticos ou não
assert.deepStrictEqual(obj1, obj2, 'Os objetos não são iguais');
assert.notDeepStrictEqual(obj1, obj3, 'Os objetos não podem ser iguais');
assert.notDeepStrictEqual(obj2, obj3, 'Os objetos não podem ser iguais');