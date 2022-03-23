import Subject from './Subject';
import Employee from './Employee';

export default class Teacher extends Employee {
	private _subject: Subject;

	constructor(nome: string, dataDeNascimento: Date, salary: number, subject: Subject) {
		super(nome, dataDeNascimento, salary);

		this._subject = subject;
		this.enrollment = this.generateEnrollment();
	}
	
	get subject(): Subject {
		return this._subject;
	}

	set subject(subject: Subject) {
		this._subject = subject;
	}

	generateEnrollment(): string {
		const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

		return `PRF${randomStr}`;
	}
}