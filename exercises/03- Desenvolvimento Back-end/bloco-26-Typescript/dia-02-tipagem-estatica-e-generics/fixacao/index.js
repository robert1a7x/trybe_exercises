// ENUM
// Crie uma Enum que represente os dias da semana . Seu valor deve ser número do dia.
var diasDaSemana;
(function (diasDaSemana) {
    diasDaSemana[diasDaSemana["segunda"] = 1] = "segunda";
    diasDaSemana[diasDaSemana["terca"] = 2] = "terca";
    diasDaSemana[diasDaSemana["quarta"] = 3] = "quarta";
    diasDaSemana[diasDaSemana["quinta"] = 4] = "quinta";
    diasDaSemana[diasDaSemana["sexta"] = 5] = "sexta";
    diasDaSemana[diasDaSemana["sabado"] = 6] = "sabado";
    diasDaSemana[diasDaSemana["doming"] = 7] = "doming";
})(diasDaSemana || (diasDaSemana = {}));
;
// Crie uma Enum que represente as cores do arco iris . Seu valor deve ser o nome das cores em português.
var coresArcoIris;
(function (coresArcoIris) {
    coresArcoIris["red"] = "vermelho";
    coresArcoIris["orange"] = "laranja";
    coresArcoIris["yellow"] = "amarelo";
    coresArcoIris["green"] = "verde";
    coresArcoIris["blue"] = "azul";
    coresArcoIris["indigo"] = "anil";
    coresArcoIris["violet"] = "violeta";
})(coresArcoIris || (coresArcoIris = {}));
// Crie uma Enum que represente as ações: salvar , imprimir , abrir , visualizar e fechar . Seu valor deve ser do tipo inteiro.
var actions;
(function (actions) {
    actions[actions["save"] = 0] = "save";
    actions[actions["print"] = 1] = "print";
    actions[actions["open"] = 2] = "open";
    actions[actions["viwe"] = 3] = "viwe";
    actions[actions["close"] = 4] = "close";
})(actions || (actions = {}));
var save = actions.save;
console.log(save);
// Crie uma Enum que represente os pontos cardeais: Norte , Leste , Sul e Oeste . Seu valor deve ser a primeira letra do nome do ponto cardial.
var cardeais;
(function (cardeais) {
    cardeais["North"] = "N";
    cardeais["South"] = "S";
    cardeais["East"] = "E";
    cardeais["West"] = "W";
})(cardeais || (cardeais = {}));
;
var newCadeais = cardeais.East;
console.log(newCadeais);
var funcSome = function (x, y) {
    return x + y;
};
console.log(funcSome(10, 20));
var id = '123333'; // exemplo, pode ser tanto number quanto string
var system = 'windows'; // exemplo, este tipe só pode ser uma das tres opcoes descritas acima
