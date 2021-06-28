let array = [5, 20, 1, 7, 10, 2];

function menorIndice(a) {
  let menor = a[0];
  
  for (let i in a) {
    if (a[menor] > a[i]) {
      menor = i;
    }
  }

  return menor;
}

console.log(menorIndice(array));