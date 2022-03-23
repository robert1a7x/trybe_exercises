var Tv = /** @class */ (function () {
    function Tv(b, s, r, c) {
        this._brand = b;
        this._size = s;
        this._resolustion = r;
        this._connections = c;
    }
    Tv.prototype.turnOn = function () {
        console.log("Ligando a tv da ".concat(this._brand, ", com tamanho de ").concat(this._size, ", com uma de resulu\u00E7\u00E3o ").concat(this._resolustion, ", possui os seguintes conectores: ").concat(this._connections));
    };
    Object.defineProperty(Tv.prototype, "connectedTo", {
        get: function () {
            return this._connectedTo;
        },
        set: function (value) {
            if (this._connections.includes(value)) {
                this._connectedTo = value;
            }
            else {
                console.log('Sorry, connection unavailable!');
            }
        },
        enumerable: false,
        configurable: true
    });
    return Tv;
}());
var tv1 = new Tv('Samsumg', 55, '4k', ['HDMI', 'Ethernet', 'USB']);
tv1.turnOn();
tv1.connectedTo = 'Ethernet';
console.log('Connected to ' + tv1.connectedTo);
