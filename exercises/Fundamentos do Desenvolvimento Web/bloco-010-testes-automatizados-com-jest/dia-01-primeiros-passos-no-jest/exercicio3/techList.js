const techList = (array, name) => {
  let nome = name;
  let objectArray = [];
  array.sort();

  for (let i of array) {
    objectArray.push({
      tech: i, name: nome,
    });
  }

  if (objectArray.length === 0) {
    return 'Vazio!';
  }
  
  return objectArray;
};

module.exports = techList;