//Array de referencia 
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//EXERCICIO 1
for (let i = 0; i < numbers.length; i += 1) {
  console.log(numbers[i]);
}

//EXERCICIO 2
let soma = 0;

for (let i = 0; i < numbers.length; i += 1) {
  soma += numbers[i];
}

console.log("O resultado da soma dos números é: " + soma);

//EXERCICIO 3
let somaM = 0;

for (let i = 0; i < numbers.length; i += 1) {
  somaM += numbers[i];
}

let media = somaM / numbers.length;

console.log("A média de " + somaM + " é igual a = " + media);

//EXERCICIO 4
if (media > 20) {
  console.log("Valor maior que 20");
} else {
  console.log("Valor menor ou igual a 20");
}

//EXERCICIO 5
let maiorValor = 0;

for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] > maiorValor) {
    maiorValor = numbers[i];
  }
}

console.log("O maior número do array é: " + maiorValor);

// Exercicio 6
let numerosImpares = 0;

for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] % 2 !== 0) {
    numerosImpares += 1;
  }
}

console.log("Total de números ímpares: " + numerosImpares);

// Exercicio 7

// Exercicio 8

// Exercicio 9
