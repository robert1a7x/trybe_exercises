export default class OrderItem {
	private _nome: string;
	private _preco: number;

	constructor(nome: string, preco: number) {
		this._nome = nome;
		this._preco = preco;
	}

	get nome(): string {
		return this._nome;
	}

	set nome(nome: string) {
		if (nome.length < 3) {
			throw new Error('O nome do produto deve ter pelo menos 3 letras');
		}

		this._nome = nome;
	}
	
	get preco(): number {
		return this._preco;
	}

	set preco(preco: number) {
		if (preco < 0) {
			throw new Error('Prço deve ser um valor positivo')
		}

		this._preco = preco;
	}
}