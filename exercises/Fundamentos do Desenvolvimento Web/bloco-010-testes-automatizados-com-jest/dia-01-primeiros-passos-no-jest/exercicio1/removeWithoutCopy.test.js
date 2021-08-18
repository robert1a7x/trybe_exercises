const myRemoveWithoutCopy = require('./removeWithoutCopy');

describe('A função recebe um array e retorna o próprio array sem o elemento item caso ele exista no array', () => {
  test('Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });

  test('Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });

  const array = [1, 2, 3, 4];
  myRemoveWithoutCopy(array, 1);
  test('Faça uma chamada para a função e verifique se o array passado por parâmetro sofreu alterações', () => {
    expect(array).toEqual([2, 3, 4]);
  });

  test('Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});