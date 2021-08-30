let array = [4, 1, 4, 5, 3, 4, 3];

function getMaisRepetido(array) {
    let contador = 0;
    let contadorMax = 1;
    let maisRepetido;

    for (let i = 0; i < array.length; i += 1) {
        for (let h = 0; h < array.length; h += 1) {
            if (array[i] == array[h]) {
                contador += 1;
            }
            if (contadorMax < contador) {
                contadorMax = contador;
                maisRepetido = array[i]
            }
        }
        contador = 0;
    }
    return maisRepetido;
}

console.log("O numero mais repetido no array " + array + " é o = " + getMaisRepetido(array));