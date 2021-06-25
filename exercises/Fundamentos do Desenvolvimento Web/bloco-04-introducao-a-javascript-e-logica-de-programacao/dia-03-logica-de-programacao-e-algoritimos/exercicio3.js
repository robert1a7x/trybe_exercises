//EXERCICIO 3
let n = 5;
let campo = "";
let posicao = n;

for (let i = 0; i < n; i += 1) {

  for (let h = 0; h <= n; h += 1) {

    if (h < posicao) {
      campo = campo + " ";

    } else {
      campo = campo + "*";

    }
  }

  console.log(campo);
  campo = "";
  posicao -= 1;
}