// ./exercises.ts

export function greeter(name: string) {
	return `Olá ${name}!`;
}

export function personAge(name: string, age: number) {
	return `${name} tem ${age} anos!`;
}

export function add(x: number, y: number): number {
	return x + y;
}

export function sumArray(numbers: number[]): number {
	return numbers.reduce(add, 0);
}

export function triangle(base: number, height: number): number {
	return (base * height) / 2;
}

export function square(side: number): number {
	return side ** 2;
}

export function rectangle(base: number, height: number): number {
	return base * height;
}

export function losang(diagonalMaior: number, diagonalMenor: number): number {
	return (diagonalMaior * diagonalMenor) / 2;
}

export function trapezio(altura: number, baseMaior: number, baseMenor: number): number {
	return ((baseMaior + baseMenor) * altura) / 2;
}

export function circulo(r: number): number {
	let pi: number = 3.14;

	return pi * Math.pow(r, 2);
}