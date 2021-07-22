// 1 - Crie uma função que receba um número e retorne seu fatorial.
// Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.

let fatorial = 4;

const calcFatorial = f => {
  for (let i = f - 1; i >= 1; i -= 1 ) {
    f *= i;
  }
  return f;
}

console.log(calcFatorial(fatorial));