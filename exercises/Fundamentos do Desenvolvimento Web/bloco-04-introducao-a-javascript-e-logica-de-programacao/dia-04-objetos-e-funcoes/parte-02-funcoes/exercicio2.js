let array = [2, 20, 6, 7, 10, 1];

function maiorIndice(a) {
  let maior = 0;
  
  for (let i in a) {
    if (a[maior] < a[i]) {
      maior = i;
    }
  }

  return maior;
}

console.log(maiorIndice(array));