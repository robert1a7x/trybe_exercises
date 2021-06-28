let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};
info.recorrente = "Sim";

let info2 = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: "O último MacPatinhas",
};
info2.recorrente = "Sim";

for (let i in info && info2) { // fazendo a repeticao em abos os objetos com o &&
  if (info[i] !== info2[i]) { // verificando se o conteudo de alguma chave e igual, e caso seja, dizer que sao iguais(recorrentes nesse caso)
    console.log(info[i] + " e " + info2[i]);
  } else {
    console.log("Ambos recorrentes");
  }
}