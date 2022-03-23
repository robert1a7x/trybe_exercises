// FORMA SEM GENERICS ONDE UMA FUNCAO COM ANY, PODE MISTURAR OS TIPOS DENTRO DE UM ARRAY
function getArray(items) {
    return new Array().concat(items);
}
var numberArray = getArray([5, 10, 15, 20]);
numberArray.push(25);
// numberArray.push("This is not a number"); // Isto vai gerar um erro de compilação
numberArray.push(100);
var stringArray = getArray(["Cats", "Dogs", "Birds"]);
stringArray.push("Rabbits");
// stringArray.push(30); // Isto vai gerar um erro de compilação
stringArray.push("Cows");
// MAIS DE UM GENERICS
function identity(value, message) {
    console.log(message);
    return value;
}
var returnNumber = identity(100, "Olá");
var returnString = identity("100", "Mundo");
var returnBoolean = identity(true, "Olá, Mundo!");
