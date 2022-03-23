interface MyInterface {
	myNumber: number;
	myFunc(myParam: number): string;
}

class MyClass implements MyInterface {
	constructor(public myNumber: number) {

	}

	myFunc(myParam: number): string {
		const soma = myParam + this.myNumber;

		return `A soma é de: ${soma}`;
	}
}

const class1 = new MyClass(10);

console.log(class1.myFunc(10));