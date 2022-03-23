var EyeColor;
(function (EyeColor) {
    EyeColor["Black"] = "Pretos";
    EyeColor["Blue"] = "Azuis";
    EyeColor["Greem"] = "Verdes";
    EyeColor["Brown"] = "Castanhos";
})(EyeColor || (EyeColor = {}));
var Person = /** @class */ (function () {
    function Person(name, birthDate, eyeColor) {
        this.name = name;
        this.birthDate = birthDate;
        this.eyeColor = eyeColor;
    }
    Person.prototype.speak = function () {
        console.log("".concat(this.name, " est\u00E1 falando."));
    };
    Person.prototype.eat = function () {
        console.log("".concat(this.name, " est\u00E1 comendo."));
    };
    Person.prototype.walk = function () {
        console.log("".concat(this.name, " est\u00E1 andando."));
    };
    return Person;
}());
var person1 = new Person("Jane Doe", new Date("1986-01-01"));
var person2 = new Person("Jon Doe", new Date("1980-08-05"), EyeColor.Black);
console.log(person1);
person1.speak();
console.log(person2);
person2.walk();
person1.eyeColor = EyeColor.Brown; // é possivel adicionar a propriedade depois da criacao
console.log(person1);
