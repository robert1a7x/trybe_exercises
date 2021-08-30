const myRemove = require('./removeArray');

describe('Recebe um array e retorna uma cópia desse array sem o elemento item caso ele exista no array', () => {
  test('Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([ 1, 2, 4 ]);
  });

  test('Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });

  const myList = [5, 6, 7, 8];
  myRemove(myList, 5);
  test('Verifique se o array passado por parâmetro não sofreu alterações', () => {
    expect(myList).toEqual([5, 6, 7, 8]);
  });

  test('Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});