import Order from "./Order";
import Person from "../escola/Person";

export default class OrderRepository {
  private _orders: Order[];

  constructor() {
    this._orders = [];
  }

  addOrder(order: Order) {
    this._orders.push(order);
  }

  removeOrder(value: Order): void {
    const index = this._orders.findIndex((order) => order.id === value.id);

    this._orders.splice(index, 1);
  }

  listByClient(value: Person): Order[] {
    return this._orders.filter((order) => order.cliente === value);
  }

  listBySortedValue(sort: string): Order[] {
    if (!["maior", "menor"].includes(sort)) throw new Error("Valor de ordenação inválido.");

    if (sort === "menor") {
      return this._orders.sort((orderA, orderB) => orderA.valorComDesconto() - orderB.valorComDesconto());
    } else {
      return this._orders.sort((orderA, orderB) => orderB.valorComDesconto() - orderA.valorComDesconto());
    }
  }
}
