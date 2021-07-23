const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// 1 - Crie uma função para adicionar o turno da manhã na lesson2
const addLesson2 = (obj, key, value) => obj[key] = value;

addLesson2(lesson2, 'turno', 'manhã');
console.log(lesson2);
console.log('-------------------------------------')

//2 - Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
const listObjectKeys = obj => Object.keys(obj);

console.log(listObjectKeys(lesson3));
console.log('-------------------------------------')

//3 - Crie uma função para mostrar o tamanho de um objeto.
const ObjectSize = obj => Object.keys(obj).length;

console.log(`O objeto lesson1 tem ${ObjectSize(lesson1)} linhas de tamanho`);
console.log('-------------------------------------')

//4 - Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.