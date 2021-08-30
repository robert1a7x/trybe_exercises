const hydrate = (string) => {
  let stringArray = string.split('');
  let agua = 0;
  for (let i of stringArray) {
    if (Number(i)) {
      let number = Number(i);
      agua += number;
    }
  }
  if (agua === 1) {
    return `${agua} copo de água`;
  }
  return `${agua} copos de água`;
}

module.exports = hydrate;