const {encode, decode} = require('./encodeDecode.js')

describe('Para as funções encode e decode teste o seguinte', () => {
  test('Teste se encode é uma função;', () => {
    expect(typeof encode).toBe('function');
  });

  test('Teste se decode é uma função;', () => {
    expect(typeof decode).toBe('function');
  });

  test('Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5', () => {
    expect(encode('aeiou')).toBe('12345');
  });

  test('Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertido nas vogais a, e, i, o, u ', () => {
    expect(decode('12345')).toBe('aeiou');
  });

  test('Teste se as demais letras/números não são convertidos para o casa do encode', () => {
    expect(encode('Rhythm')).toBe('Rhythm');
  });

  test('Teste se as demais letras/números não são convertidos para o casa do decode', () => {
    expect(encode('67890')).toBe('67890');
  });

  const string = 'trybe';
  const string2 = '12345'
  test('Teste se a string que é retornada em encode têm o mesmo número de caracteres que a string passada como parâmetro', () => {
    expect(encode(string).length).toBe(string.length);
  });

  test('Teste se a string que é retornada em decode têm o mesmo número de caracteres que a string passada como parâmetro', () => {
    expect(decode(string2).length).toBe(string2.length);
  });
});