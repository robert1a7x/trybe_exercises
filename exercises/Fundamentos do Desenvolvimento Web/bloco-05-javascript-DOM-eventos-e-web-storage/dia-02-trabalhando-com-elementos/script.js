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
