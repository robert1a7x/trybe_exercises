// EXERCÍCIO 1
let a = 10;
let b = 5;

let adicao = a + b;
let subtracao = a - b;
let multiplicacao = a * b;
let divisao = a / b;
let modulo = a % b;

console.log("resultado adição = " + adicao + "\n" + 
            "resultado subtração = " + subtracao + "\n" +
            "resultado multiplicação = " + multiplicacao + "\n" +
            "resultado divisão = " + divisao + "\n" +
            "resultado modulo = " + modulo + "\n");
// EXERCÍCIO 2
let n1 = 7;
let n2 = 6;

if (n1 > n2) {
  console.log("n1 é o maior número!");

} else {
  console.log("n2 é o maior número!");
}

// EXERCÍCIO 3
let num1 = 8;
let num2 = 9;
let num3 = 7;

if (num1 > num2 && num1 > num3) {
  console.log("num1 é o maior número!");

} else if (num2 > num1 && num2 > num3) {
    console.log("num2 é o maior número!");

} else {
    console.log("num3 é o maior número!");
}

// EXERCÍCIO 4
let numero = 1;

if (numero < 0) {
  console.log("negative");

} else if (numero > 0) {
    console.log("positive");

} else {
    console.log("zero");

}

// EXERCÍCIO 5
let tri1 = 8;
let tri2 = 7;
let tri3 = 6;
let triangulo;

if (tri1 > tri2 + tri3) {
  triangulo = false;

} else if (tri2 > tri1 + tri3) {
    triangulo = false;

} else if (tri3 > tri1 + tri2) {
    triangulo = false;

} else {
  triangulo = true;
}

console.log(triangulo);


// EXERCÍCIO 6
let peca = "cavalo";

switch (peca) {
  case "peao":
    console.log("Anda uma casa para frente");
    break;
  case "bispo":
    console.log("Diagonais");
    break;
  case "torre":
    console.log("Anda todas as casas para frente");
    break;
  case "cavalo":
    console.log("Anda em forma de L");
    break;
  default:
    console.log("Peça invalida")
}

// EXERCÍCIO 7

// EXERCÍCIO 8

// EXERCÍCIO 9

// EXERCÍCIO 10

// EXERCÍCIO 11