let array = ['José', 'Robert', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function getMaiorPalavra(array) {
    let maiorPalavra = array[0];
    
    for(let i of array) {
        if (maiorPalavra.length < i.length) {
            maiorPalavra = i;
        }
    }
    return maiorPalavra;
}

console.log("A maior palavra da string " + array + " é = " + getMaiorPalavra(array));