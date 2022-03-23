import Enrollable from "./enrollable";
import Pessoa from "./Person";

export default class Employee extends Pessoa implements Enrollable {
  private _salary: number;
  private _admissionDate: Date;
  private _enrollment: string;

  constructor(nome: string, dataDeNascimento: Date, salary: number) {
    super(nome, dataDeNascimento);

    this._salary = salary;
    this._admissionDate =  new Date();
    this._enrollment = this.generateEnrollment();
  }

  get enrollment(): string {
    return this._enrollment;
  }

  set enrollment(value: string) {
    if (value.length < 16)
      throw new Error("A matrícula deve possuir no mínimo 16 caracteres.");

    this._enrollment = value;
  }

  get salary(): number {
    return this._salary;
  }

  set salary(value: number) {
    if (value < 0) throw new Error("O salário não pode ser negativo.");

    this._salary = value;
  }

  get admissionDate(): Date {
    return this._admissionDate;
  }

  set admissionDate(value: Date) {
    if (value.getTime() > new Date().getTime()) {
      throw new Error("A data de admissão não pode ser uma data no futuro.");
    }

    this._admissionDate = value;
  }

  generateEnrollment() {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, "");

    return `FUNC${randomStr}`;
  }
}
