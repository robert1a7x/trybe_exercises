const uppercase = require('./uppercase');

test('Verifica se a chamada da callback da funcao uppercase transforma as letras das palavras minusculas em maiuscula', (done) => {
  uppercase('robert', (uppercase) => {
    expect(uppercase).toBe('ROBERT');
    done();
  });
});