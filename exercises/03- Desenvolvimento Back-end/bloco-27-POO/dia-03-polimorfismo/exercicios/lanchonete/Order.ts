import Person from '../escola/Person';
import OrderItem from './OrderItem';

export default class Order {
	private _id: number;
  private _createdAt: Date;
	private _cliente: Person;
	private _items: OrderItem[] = [];
	private _metodoPagamento: string;
	private _desconto: number = 0;

	constructor(cliente: Person, items: OrderItem[], metodoPagamento: string, desconto?: number) {
		this._id = Math.trunc(Date.now() * (Math.random() + 1));
		this._createdAt = new Date();
		this._cliente = cliente;
		this._items = items;
		this._metodoPagamento = metodoPagamento;

		if (desconto) this._desconto = desconto;
	}

	get id(): number {
		return this._id;
	}

	get createdAt(): Date {
		return this._createdAt;
	}

	get cliente(): Person {
		return this._cliente;
	}

	set cliente(cliente: Person) {
		this._cliente = cliente;
	}

	get items(): OrderItem[] {
		return this._items;
	}

	set items(items: OrderItem[]) {
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