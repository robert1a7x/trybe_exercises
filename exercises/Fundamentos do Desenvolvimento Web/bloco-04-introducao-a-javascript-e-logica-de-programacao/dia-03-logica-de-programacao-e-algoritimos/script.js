//EXERCICIO 1
let n1 = 6;
let campo1 = "";

for (let i = 0; i < n1; i += 1) {
  campo1 += "*";
}

for (let i = 0; i < n1; i += 1) {
  console.log(campo);
}

//EXERCICIO 2
let n2 = 5;
let campo2= "";

for (let i = 0; i < n2; i += 1) {
  campo2 += "*";
  console.log(campo2);
}

//EXERCICIO 3
let n3 = 5;
let campo3= "";
let posicao = n3;

for (let i = 0; i < n3; i += 1) {
  for (let h = 0; h <= n3; h += 1) {
    if (h < posicao) {
      campo3 = campo3 + " ";
    } else {
      campo3 =campo3 + "*";
    }
  }
  console.log(campo3);
  campo3 = "";
  posicao -= 1;
}

//EXERCICIO 4