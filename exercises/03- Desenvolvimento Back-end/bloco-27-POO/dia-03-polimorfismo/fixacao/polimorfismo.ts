abstract class Character {
	abstract talk(): void;
	abstract specialMove(): void;
}

class MeleeCharacter extends Character {
	constructor(private name: string, private specialMoveName: string ) {
		super();
	}
	talk(): void {
		console.log(`Sou ${this.name} Eu ataco a curta distancia`)
	}

	specialMove() {
		console.log(`Sou ${this.name} utilizou seu movimento especial: ${this.specialMoveName}!`);
	}
}

class LongRangeCharacter extends Character {
	constructor(private name: string, private specialMoveName: string ) {
		super();
	}
	talk(): void {
		console.log(`Sou ${this.name} eu ataco a longa distancia`)
	}

	specialMove() {
		console.log(`Sou ${this.name} utilizou seu movimento especial: ${this.specialMoveName}!`);
	}
}

const meele = new MeleeCharacter('Earthshaker', 'Echo Slam');
const ranged = new LongRangeCharacter('Phoenix', 'Supernova');

const myFunc = (character: Character) => {
	character.talk();
	character.specialMove();
}

myFunc(meele);
myFunc(ranged);
