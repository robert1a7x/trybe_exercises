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

describe('Compare dois objetos para verificar se são idênticos ou não', () => {
  test('verifica se o obj1 é igual ao obj 2, o resultado deve ser verdadeiro', () => {
    expect(obj1).toEqual(obj2);
  });

  test('verifica se o obj2 é diferente do obj 3, o resultado deve ser verdadeiro', () => {
    expect(obj2).not.toEqual(obj3);
  });
});