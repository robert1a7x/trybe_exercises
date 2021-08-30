const getUserName = require('./getUserName');

// utilizando o .resolves e .rejects
describe('Teste dos casos em que o funcionário é ou não encontrado', () => {
  test('Funcionário é encontrado ao passar um id de numero 1', () => (
    expect(getUserName(1)).resolves.toBe('Mark')
  ));

  test('Funcionário não encontrado ao passar um id de número 3', () => (
    expect(getUserName(3)).rejects.toEqual(Error(`User with ${3} not found.`))
  ));
});

// utilizando o async await
describe('Teste dos casos em que o funcionário é ou não encontrado com async await', () => {
  test('Funcionário é encontrado ao passar um id de numero 2', async () => {
    const response = await getUserName(2);
    expect(response).toBe('Paul');
  });

  test('Funcionário não encontrado ao passar um id de número 3', async () => {
    try {
      await getUserName(3)
    } catch (error) {
      expect(error).toEqual(Error(`User with ${3} not found.`))
    }
  });
});