// 5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.
const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  const lcNames = names.map((element) => {
    let lowerCase = element.toLowerCase();
    return lowerCase;
  });

  return lcNames.reduce((acc, curr) => acc + curr.split().reduce((acu, cur) => (cur === 'a' ? acu + 1: acu), 0), 0)
}

assert.deepStrictEqual(containsA(), 20);