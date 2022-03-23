class Superclass {
	isSuper: boolean;

	constructor() {
		this.isSuper = true
	}

	sayHello() {
		console.log('Olá mundo!')
	}
}

class Subclass extends Superclass {
	constructor() {
		super();

		this.isSuper = false;
	}
}

const myFunc = (object: Superclass) => {
	object.sayHello();
	console.log((object.isSuper ? 'Super!' : 'Sub!'));
}

const sp1 = new Superclass();
const sp2 = new Subclass();

myFunc(sp1);
myFunc(sp2);