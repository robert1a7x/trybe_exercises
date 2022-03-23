// Exercicio 1 - Escreva uma classe cujos objetos representarão pessoas estudantes matriculadas em uma disciplina. A classe deve conter os seguintes dados: matrícula, nome, 4 notas de prova, 2 notas de trabalho.
class Aluno {
	private	_nome: string;
 	private _matricula: string;
 	private _notaProva: number[];
 	private _notaTrabalho: number[];

 	constructor(
		nome: string,
		matricula: string,
		notaProva: number[],
		notaTrabalho: number[],
 ) {
		this._nome = nome;
		this._matricula = matricula;
		this._notaProva = notaProva,
		this._notaTrabalho = notaTrabalho;
 }

// exercicio 2 -  Adicione dois métodos: um que calcula a soma das notas da pessoa estudante e outro que calcula a média das notas da pessoa estudante.

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
}

const Aluno1 = new Aluno('Robert', 'D04JBA5', [10, 10, 10, 10], [10, 10]);

console.log(`A soma de notas do aluno ${Aluno1.nome} é: ${Aluno1.soma()}`);
console.log(`A Média de notas do aluno ${Aluno1.nome} é: ${Aluno1.media()}`);