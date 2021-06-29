let n = 5;

function getSomaElementos(n) {
    let soma = 0;
    for (let i = 1; i <= n; i += 1) {
        soma += i;
    }
    return soma;
}

console.log("O somatorio de todos os números de 1 até o " + n + " é igual a = " + getSomaElementos(n));