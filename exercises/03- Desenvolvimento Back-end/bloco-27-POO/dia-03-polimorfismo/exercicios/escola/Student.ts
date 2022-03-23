import Enrollable from "./enrollable";
import EvaluationResult from "./EvaluationResult";
import Person from "./Person";

export default class Student extends Person implements Enrollable {
  private _enrollment: string = "";
  private _evaluationsResults: EvaluationResult[];

  constructor(nome: string, dataDeNascimento: Date) {
    super(nome, dataDeNascimento);

    this._enrollment = this.generateEnrollment();
    this._evaluationsResults = [];
  }

  soma(): number {
    return this._evaluationsResults.reduce(
      (acc, curr) => curr.score + acc,0);
  }

  media(): number {
    const sumNotes = this.soma();
    const divider = this._evaluationsResults.length;

    return Math.round(sumNotes / divider);
  }

  addEvaluationResult(value: EvaluationResult): void {
    this._evaluationsResults.push(value);
  }

  get evaluationsResults(): EvaluationResult[] {
    return this._evaluationsResults;
  }

  get nome(): string {
    return this._nome;
  }

  set nome(nome: string) {
    if (nome.length < 3) {
      throw new Error("O nome deve conter no mínimo 3 caracteres.");
    }

    this._nome = nome;
  }

  get enrollment(): string {
    return this._enrollment;
  }

  set enrollment(matricula: string) {
    if (matricula.length < 16)
      throw new Error("A matrícula deve possuir no mínimo 16 caracteres.");
    this._enrollment = matricula;
  }

  generateEnrollment() {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(
      /\W/g,
      ""
    );

    return `STD${randomStr}`;
  }
}
