let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

info.recorrente = "Sim";

for (let i in info) {
  console.log(info[i]); // mostra o conteudo de todas as chaves
}
