enum EyeColor {
	Black = "Pretos",
	Blue = "Azuis",
	Greem = "Verdes",
	Brown = "Castanhos",
}

class Person {
	name: string;
	birthDate: Date;
	eyeColor?: EyeColor; // ? significa que a propriedade pode ser omitida na hora do instanciamento da classe

	constructor(name: string, birthDate: Date, eyeColor?: EyeColor) {
			this.name  = name;
			this.birthDate  = birthDate;
			this.eyeColor  = eyeColor;
	}

	speak(): void {
			console.log(`${this.name} está falando.`);
	}

	eat(): void {
			console.log(`${this.name} está comendo.`)
	}

	walk(): void {
			console.log(`${this.name} está andando.`)
	}
}

const person1 = new Person("Jane Doe", new Date("1986-01-01"));
const person2 = new Person("Jon Doe", new Date("1980-08-05"), EyeColor.Black);

console.log(person1);
person1.speak()

console.log(person2);
person2.walk();

person1.eyeColor = EyeColor.Brown; // é possivel adicionar a propriedade depois da criacao
console.log(person1);