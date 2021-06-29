let array = [2, 4, 6, 7, 10, 0, -3];

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