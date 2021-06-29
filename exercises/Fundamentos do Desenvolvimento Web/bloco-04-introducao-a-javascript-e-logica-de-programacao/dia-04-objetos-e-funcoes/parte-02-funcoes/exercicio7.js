let palavra = "trybe";
let fimPlalavra = "be";

function verificarPalavra(p, f) {
    p = p.split("");
    f = f.split("");
    let resposta;

    for (let i = 0; i < f.length; i += 1) {
        if (p[p.length - f.length + i]  === f[i]) {
            resposta = true;
        } else {
            resposta = false;
        }
    }

    return resposta;
}

console.log("A sentença " + fimPlalavra + " é igual ao final da palavra " + palavra + " ? " + verificarPalavra(palavra, fimPlalavra));