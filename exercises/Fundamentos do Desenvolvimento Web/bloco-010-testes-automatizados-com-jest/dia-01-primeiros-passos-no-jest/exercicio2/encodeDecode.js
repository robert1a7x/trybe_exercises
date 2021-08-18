const encode = (string) => {
  let stringArray = string.split('');
  for (let i = 0; i < stringArray.length; i += 1) {
    switch (stringArray[i]) {
    case 'a': stringArray[i] = 1;
      break;
    case 'e': stringArray[i] = 2;
      break;
    case 'i': stringArray[i] = 3;
      break;
    case 'o': stringArray[i] = 4;
      break;
    case 'u': stringArray[i] = 5;
      break;
    default:
    }
  }
  return stringArray.join('');
};

const decode = (string) => {
  let stringArray = string.split('');
  for (let i = 0; i < stringArray.length; i += 1) {
    switch (stringArray[i]) {
    case '1': stringArray[i] = 'a';
      break;
    case '2': stringArray[i] = 'e';
      break;
    case '3': stringArray[i] = 'i';
      break;
    case '4': stringArray[i] = 'o';
      break;
    case '5': stringArray[i] = 'u';
      break;
    default:
    }
  }
  return stringArray.join('');
};

const functions = { encode, decode };
module.exports = functions;