import Pessoa from './Person';
import Employee from './Employee';
import Subject from './Subject';

//Exercício 5 : Crie uma classe cujos objetos representem uma pessoa professora.
export default class Teacher extends Pessoa implements Employee {
	private _subject: Subject;
	private _salary: number;
	private _admissionDate: Date;
	private _registration: string;


	constructor(nome: string, dataDeNascimento: Date, salary: number, subject: Subject) {
		super(nome, dataDeNascimento);

		this._subject = subject;
		this._salary = salary
		this._admissionDate = new Date();
		this._registration = this.generateRegistration();
	}
	
	get subject(): Subject {
		return this._subject;
	}

	set subject(subject: Subject) {
		this._subject = subject;
	}
	
	get salary(): number {
		return this._salary;
	}

	set salary(salary: number) {
		if (salary < 0) {
			throw new Error('O salario nao pode ser negativo')
		}

		this._salary = salary;
	}

	get admissionDate(): Date {
		return this._admissionDate;
	}

	set admissionDate(date: Date) {
		if (date.getTime() > new Date().getTime()) throw new Error('A data nao pode ser do futuro');

		this._admissionDate = date;
	}

	get registration(): string {
		return this._registration;
	}

	set registration(register: string) {
		if (register.length < 16) throw new Error('O registro deve ter 16 caracteres')
	}

	generateRegistration(): string {
		const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

		return `PRF${randomStr}`;
	}
}