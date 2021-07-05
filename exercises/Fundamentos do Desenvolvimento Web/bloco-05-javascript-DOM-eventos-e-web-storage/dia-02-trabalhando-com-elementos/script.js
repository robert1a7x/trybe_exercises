let body = document.querySelector("body");

//exercicio 1 - Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body
let title = document.createElement("h1");
title.innerText = "Exercício 5.2 - JavaScript DOM";
body.appendChild(title);

//exercicio 2 - Adicione a tag div com a classe main-content como filho da tag body
let divMainContent = document.createElement("div");
divMainContent.className = "main-content";
body.appendChild(divMainContent);

//exercicio 3 - Adicione a tag div com a classe center-content como filho da tag div criada no passo 2
let divCenterContent = document.createElement("div");
divCenterContent.className = "center-content";
divMainContent.appendChild(divCenterContent);

//exercicio 4 - Adicione a tag p como filho do div criado no passo 3 e coloque algum texto;
let CenterContentParagraph = document.createElement("p");
CenterContentParagraph.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum.";
divCenterContent.appendChild(CenterContentParagraph);

//exercicio 5 - Adicione a tag div com a classe left-content como filho da tag div criada no passo 2
let divLeftContent = document.createElement("div");
divLeftContent.className = "left-content";
divMainContent.appendChild(divLeftContent);

//exercicio 6 - Adicione a tag div com a classe right-content como filho da tag div criada no passo 2
let divRightContent = document.createElement("div");
divRightContent.className = "right-content";
divMainContent.appendChild(divRightContent);

//exercicio 7 - Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do div criado no passo 5;
let leftImage = document.createElement("img");
leftImage.src = "https://picsum.photos/200";
leftImage.className = "small-image";
divLeftContent.appendChild(leftImage);

//exercicio 8 - Adicione uma lista não ordenada com os valores de 1 a 10 por extenso como valores da lista. Essa lista deve ser filha do div criado no passo 6
let ul = document.createElement("ul");
divRightContent.appendChild(ul);
let listItems = ["Um", "Dois", "Três", "Quatro", "Cinco", "Seis", "Sete", "Oito", "Nove", "Dez"];

for (let i of listItems) {
  let item = i;
  let itemCreation = document.createElement("li");
  itemCreation.innerText = item;
  ul.appendChild(itemCreation);
}
