// ./index.ts

import readline from "readline-sync"; // importamos o pacote readline-sync

// criamos um array de objetos com o nome do script e o caminho do script a ser executado
const scripts = [
    { name: "Converter comprimento", script: "./length" },
    { name: "Converter massa", script: "./mass" },
    { name: "Converter capacidade", script: "./capacity" },
    { name: "Converter área", script: "./area" },
    { name: "Converter volume", script: "./volume" }
];

// criamos um novo array somente com os nomes dos scripts
const scriptNames = scripts.map(item => item.name);

// pedimos à pessoa usuária para escolher um dos scripts de conversão
const choice = readline.keyInSelect(scriptNames, "Escolha um número para executar o script de conversão de unidade", { cancel: "SAIR" });

if (choice === -1) console.log("Saindo!"); // caso a pessoa usuária escolha sair, printamos "Saindo!" no terminal
else require(scripts[choice].script); // caso escolha um script executamos o script escolido usando o require