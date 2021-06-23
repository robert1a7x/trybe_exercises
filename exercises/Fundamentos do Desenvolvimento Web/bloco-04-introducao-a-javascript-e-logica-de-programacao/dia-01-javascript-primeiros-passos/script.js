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
let nota = 67;

if (nota >= 90 && nota <= 100) {
  console.log("Nota A");

} else if (nota >= 80 && nota < 90) {
    console.log("Nota B");

} else if (nota >= 70 && nota < 80) {
    console.log("Nota C");

} else if (nota >= 60 && nota < 70) {
    console.log("Nota D");

} else if (nota >= 50 && nota < 60) {
    console.log("Nota E");

} else if (nota < 50 && nota >= 0) {
    console.log("Nota F");

} else {
  console.log("Nota invalida, insira um valor válido")
}

// EXERCÍCIO 8
let numerop1 = 3;
let numerop2 = 3;
let numerop3 = 4;
let par;

if (numerop1 % 2 === 0 || numerop2 % 2 === 0 || numerop3 % 2 === 0) {
  par = true;

} else {
  par = false;
}

console.log(par);

// EXERCÍCIO 9
let numeroi1 = 4;
let numeroi2 = 4;
let numeroi3 = 4;
let impar;

if (numeroi1 % 2 !== 0 || numeroi2 % 2 !== 0 || numeroi3 % 2 !== 0) {
  impar = true;

} else {
  impar = false;
}

console.log(impar);

// EXERCÍCIO 10
let venda = 1000;
let valorProduto = 100;

let valorBruto = venda * valorProduto;

let custo = 70;
let imposto = 0.20;
let custoReal = (custo * imposto) + custo;
let valorLiquido = venda * custoReal;

let lucro = valorBruto - valorLiquido;

if (venda < 0 || valorProduto < 0 || custo < 0 ) {
  console.log("Nenhum valor de entrada deve ser menor que 0, corrija o valor");

} else {
  console.log("Lucro = R$" + lucro);

}

// EXERCÍCIO 11