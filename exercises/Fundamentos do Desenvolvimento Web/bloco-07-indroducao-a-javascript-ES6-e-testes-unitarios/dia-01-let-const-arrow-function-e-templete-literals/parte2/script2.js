// 2 - Crie uma função que receba uma frase e retorne qual a maior palavra.

let string = 'Antôniozinho foi no shopping e não sabemos o que aconteceu';

const biggestWord = string => {
  let stringSplit = string.split(' ');
  let bigWord = '';

  for (let i = 0; i < stringSplit.length; i += 1) {
    bigWord.length < stringSplit[i].length ? bigWord = stringSplit[i] : bigWord;
  }
  return bigWord;
}

console.log(string);
console.log(`A maior palavra da string é: ${biggestWord(string)}`);