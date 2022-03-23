"use strict";
exports.__esModule = true;
var Car = /** @class */ (function () {
    function Car(make, color, doors) {
        this._make = make;
        this._color = color;
        this._doors = doors;
    }
    Car.prototype.turnOn = function () {
        console.log("Ligando carro.");
    };
    Car.prototype.turnOff = function () {
        console.log("Desligando carro.");
    };
    Car.prototype.turn = function (direction) {
        console.log("Virando para a ".concat(direction, "."));
    };
    Car.prototype.speedUp = function () {
        console.log("Acelerando carro.");
    };
    Car.prototype.speedDown = function () {
        console.log("Reduzindo a velocidade do carro.");
    };
    Car.prototype.stop = function () {
        console.log("Parando carro.");
    };
    Car.prototype.honk = function () {
        console.log("Buzinando: BIP BIP");
    };
    Car.prototype.openTheDoor = function (door) {
        console.log("Abrindo a porta: ".concat(door, "."));
    };
    Car.prototype.closeTheDoor = function (door) {
        console.log("Fechando a porta: ".concat(door, "."));
    };
    return Car;
}());
exports["default"] = Car;
