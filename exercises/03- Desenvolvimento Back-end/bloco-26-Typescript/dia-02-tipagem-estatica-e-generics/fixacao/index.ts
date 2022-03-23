// ENUM

// Crie uma Enum que represente os dias da semana . Seu valor deve ser número do dia.
enum diasDaSemana {
	segunda = 1,
	terca,
	quarta,
	quinta,
	sexta,
	sabado,
	doming ,
};

// Crie uma Enum que represente as cores do arco iris . Seu valor deve ser o nome das cores em português.
enum coresArcoIris {
	red = 'vermelho',
	orange = 'laranja',
	yellow = 'amarelo',
	green = 'verde',
	blue = 'azul',
	indigo = 'anil',
	violet = 'violeta',
}

// Crie uma Enum que represente as ações: salvar , imprimir , abrir , visualizar e fechar . Seu valor deve ser do tipo inteiro.
enum actions {
	save,
	print,
	open,
	viwe,
	close,
}

let save: actions = actions.save

console.log(save);

// Crie uma Enum que represente os pontos cardeais: Norte , Leste , Sul e Oeste . Seu valor deve ser a primeira letra do nome do ponto cardial.
enum cardeais {
	North = 'N',
	South = 'S',
	East = 'E',
	West = 'W',
};

let newCadeais: cardeais = cardeais.East

console.log(newCadeais);

//Type Aliases

//Crie um type para um objeto que represente um pássaro.
type Bird = {
  wings: 2;
  beaks: 1;
  biped: true;
}

// Crie um type que represente uma função que recebe 2 valores numéricos e retorna a soma dos dois.

type Sum = (x: number, y: number) => number;

let funcSome: Sum = function (x, y) {
	return x + y;
}

console.log(funcSome(10, 20)); // exemplo, a variavel funcSome, so pode ser uma funcao que recebe dois numeros e retorna outra numero

// Crie um type para um objeto que represente um endereço.

type Address = {
  publicPlace: string;
  number: number;
  district: string;
  city: string;
  state: string;
}

// Type Unions

//Crie um type union que represente os estados físicos da matéria: líquido, sólido ou gasoso.
type stateOfMatter = 'liquid' | 'solid' | 'gaseous';

// Crie um type union que represente o documento identificador de uma pessoa que pode receber valores numéricos ou texto. Ex: “123.567.890-12” ou 123456789012.
type personalId = number | string;

let id: personalId = '123333'; // exemplo, pode ser tanto number quanto string

//Crie um type union que represente sistemas operacionais: linux, mac os ou windows.
type operationalSystem = 'windows' | 'linux' | 'mac';

let system: operationalSystem = 'windows'; // exemplo, este tipe só pode ser uma das tres opcoes descritas acima

//Crie um type union que represente as vogais do alfabeto.
type vogais = 'a' | 'e' | 'i' | 'o' | 'u';