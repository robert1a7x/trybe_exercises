export default abstract class Person {
	protected _nome: string;
	protected _dataDeNascimento: Date = new Date();

	constructor(nome: string, dataDeNascimento: Date) {
		this.validarNascimento(dataDeNascimento);
		this._nome = nome;
		this._dataDeNascimento = dataDeNascimento;
	}

	get nome(): string {
		return this._nome
	}

	set nome(nome: string) {
		if (nome.length < 3) {
			throw new Error('O nome deve ter pelo menos 3 caracteres');
		}

		this._nome = nome;
	}

	get dataDeNascimento(): Date {
		return this._dataDeNascimento;
	}

	set dataDeNascimento(data: Date) {
		this.validarNascimento(data);
		this._dataDeNascimento = data;
	}

	private validarNascimento(data: Date) {
		if (data.getTime() > new Date().getTime()) throw new Error('A data de nascimento não pode ser uma data no futuro.');
		if (Person.getAge(data) > 120) throw new Error('A pessoa deve ter no máximo 120 anos.');
	}

	static getAge(value: Date): number {
		const diff = Math.abs(new Date().getTime() - value.getTime()); // diferença em milissegundos entre a data atual e a data passada por parâmetro
		const yearMs = 31_536_000_000; // 1 ano = 31536000000 milissegundos
		return Math.floor(diff / yearMs);
	}
}