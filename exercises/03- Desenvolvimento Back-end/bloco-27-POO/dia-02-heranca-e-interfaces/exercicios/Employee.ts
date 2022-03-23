// exercicios 3 - Crie uma interface que representará uma pessoa funcionária.
export default interface Employee {
	registration: string;
	salary: number;
	admissionDate: Date;
	generateRegistration(): string;
}