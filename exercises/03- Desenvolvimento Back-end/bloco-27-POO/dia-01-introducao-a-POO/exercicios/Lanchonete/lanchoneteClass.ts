class Cliente {
	private _nome:string;

	constructor(nome: string) {
		this._nome = nome;
	}

	get nome(): string {
		return this._nome;
	}

	set nome(nome: string) {
		if (nome.length < 3) {
			throw new Error('O nome do cliente deve ter pelo menos 3 letras');
		}

		this._nome = nome;
	}
}

class Item {
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

class Pedido {
	private _cliente: Cliente;
	private _items: Item[] = [];
	private _metodoPagamento: string;
	private _desconto: number = 0;

	constructor(cliente: Cliente, items: Item[], metodoPagamento: string, desconto: number) {
		this._cliente = cliente;
		this._items = items;
		this._metodoPagamento = metodoPagamento;
		this._desconto = desconto;
	}

	get cliente(): Cliente {
		return this._cliente;
	}

	set cliente(cliente: Cliente) {
		this._cliente = cliente;
	}

	get items(): Item[] {
		return this._items;
	}

	set items(items: Item[]) {
		if (items.length === 0) {
			throw new Error('O pedido deve ter pelo menos 1 item')
		}

		this._items = items;
	}

	get metodoPagamento(): string {
		return this._metodoPagamento;
	}

	set metodoPagamento(metodo: string) {
		this.metodoPagamento = metodo;
	}

	get desconto(): number {
		return this._desconto;
	}

	set desconto(desconto: number) {
		if (desconto < 0) {
			throw new Error('O desconto nao pode ser negativo')
		}

		this._desconto = desconto;
	}

	valorTotalPedido(): number {
		return this.items.reduce((acc, item) => acc += item.preco, 0)
	}

	valorComDesconto(): number {
		return this.valorTotalPedido() * (1 - this.desconto/ 100);
	}
}


// Para testar!

const client = new Cliente('João');

const sandwiche = new Item('Sandwiche Natural', 5.00);
const juice = new Item('Suco de Abacaxí', 5.00);
const dessert = new Item('Gelatina de Uva', 10.00);

const order = new Pedido(client, [sandwiche, juice, dessert], 'dinheiro', 10);

console.log(order);
console.log('Valor normal: ', order.valorTotalPedido());
console.log('Valor com desconto: ', order.valorComDesconto());