// Exercicio 4
let n = 5;
let campo = "";

let meio = (n + 1) / 2;
let esquerda = meio;
let direita = meio;

for (let i = 0; i <= meio; i += 1) {

  for (let h = 0; h <= n; h += 1) {

    if (h > esquerda && h < direita) {
      campo = campo + "*";

    } else {
      campo = campo + " ";

    }
  }

  console.log(campo);
  campo = "";
  direita += 1;
  esquerda -= 1;
}
