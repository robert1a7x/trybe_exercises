// FORMA SEM GENERICS ONDE UMA FUNCAO COM ANY, PODE MISTURAR OS TIPOS DENTRO DE UM ARRAY
function getArray<T>(items : T[]) : T[] {
	return new Array<T>().concat(items);
}

let numberArray = getArray<number>([5, 10, 15, 20]);
numberArray.push(25);
// numberArray.push("This is not a number"); // Isto vai gerar um erro de compilação
numberArray.push(100)

let stringArray = getArray<string>(["Cats", "Dogs", "Birds"]);
stringArray.push("Rabbits");
// stringArray.push(30); // Isto vai gerar um erro de compilação
stringArray.push("Cows");

// MAIS DE UM GENERICS

function identity<T, U> (value: T, message: U) : T {
	console.log(message);
	return value
}

let returnNumber = identity<number, string>(100, "Olá");
let returnString = identity<string, string>("100", "Mundo");
let returnBoolean = identity<boolean, string>(true, "Olá, Mundo!");