class Tv {
	private _brand: string;
	private _size: number;
	private _resolustion: string;
	private _connections: string[];
	private _connectedTo: string;

	constructor(	b: string, s: number, r: string, c: string[] ) {
		this._brand = b;
		this._size = s;
		this._resolustion = r;
		this._connections = c;
	}	

	turnOn(): void {
		console.log(`Ligando a tv da ${this._brand}, com tamanho de ${this._size}, com uma de resulução ${this._resolustion}, possui os seguintes conectores: ${this._connections}`);
	}

	get connectedTo(): string {
		return this._connectedTo;
	}

	set connectedTo(value: string) {
		if (this._connections.includes(value)) {
			this._connectedTo = value;
		} else {
			console.log('Sorry, connection unavailable!')
		}
	}
}

const tv1 = new Tv('Samsumg', 55, '4k', ['HDMI', 'Ethernet', 'USB']);

tv1.turnOn();

tv1.connectedTo = 'Ethernet';

console.log('Connected to ' + tv1.connectedTo); 