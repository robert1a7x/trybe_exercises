import Pessoa from './Person';

//Exercício 2 : Refatore nossa classe de pessoa estudante para que ela herde da nossa classe pessoa.
export default class Aluno extends Pessoa {
	private _matricula: string = '';
	private _notaProva: number[] = [];
	private _notaTrabalho: number[] = [];

	constructor(nome: string, dataDeNascimento: Date) {
	 super(nome, dataDeNascimento);

	 this._matricula = this.gerarMatricula();
	}

 soma(): number {
	 const prova = this._notaProva.reduce((curr, acc) => curr + acc, 0);
	 const trabalho = this._notaTrabalho.reduce((curr, acc) => curr + acc, 0);

	 return prova + trabalho;
 }

 media(): number {
	 return this.soma() / (this._notaProva.length + this._notaTrabalho.length);
 }

 get nome(): string {
	 return this._nome;
 }

 set nome(nome: string) {
	 if (nome.length < 3) {
		 throw new Error('O nome deve conter no mínimo 3 caracteres.');
	 }

	 this._nome = nome;
 }

 get matricula(): string {
	 return this._matricula;
 }

 set matricula(matricula: string) {
	 if (matricula.length < 16) throw new Error('A matrícula deve possuir no mínimo 16 caracteres.');
	 this._matricula = matricula;
 }

 get notaProva(): number[] {
	 return this._notaProva;
 }

 set notaProva(notas: number[]) {
	 if (notas.length > 4) {
		 throw new Error('A pessoa estudante só pode possuir 4 notas de provas.');
	 }

	 this._notaProva = notas;
 }

 get notaTrabalho(): number[] {
	 return this._notaTrabalho;
 }

 set notaTrabalho(notas: number[]) {
	 if (notas.length > 2) {
		 throw new Error('A pessoa estudante só pode possuir 2 notas de trabalho.');
	 }

	 this._notaTrabalho = notas;
 }

 gerarMatricula() {
	 const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

	 return `M${randomStr}`;
 }
}