const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

// implemente seus testes aqui
// 1 - Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4], 'O array retornado deveria ser [1, 2, 4]');

// 2 - Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
assert.notDeepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4], 'O retorno não deve ser [1, 2, 3, 4]');

// 3 - Verifique se o array passado por parâmetro não sofreu alterações apos ser incluido na funcao para retirar uma posicao
const array = [1, 2, 3, 4, 5];
myRemove(array, 4);

assert.deepStrictEqual(array, [1, 2, 3, 4, 5], 'O array nao é igual ao passado no parametro inicial');

// 4 - Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4], 'O array deveria ser [1, 2, 3, 4]');