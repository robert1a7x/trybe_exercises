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

console.log(`As chaves do objeto são: ${listObjectKeys(lesson3)}`);
console.log('-------------------------------------');

//3 - Crie uma função para mostrar o tamanho de um objeto.
const ObjectSize = obj => Object.keys(obj).length;

console.log(`O objeto lesson1 tem ${ObjectSize(lesson1)} linhas de tamanho`);
console.log('-------------------------------------');

//4 - Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
const listObjectValues = obj => Object.values(obj);

console.log(`Os valores do objeto são: ${listObjectValues(lesson2)}`);
console.log('-------------------------------------');

// 5 - Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign Cada chave desse novo objeto será uma aula
const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

console.log(allLessons);
console.log('-------------------------------------');

// 6 - Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.
const getAllStudents = obj => {
  const objKeys = Object.keys(obj);
  let numeroAlunos = 0;

  for (let i in objKeys) {
    numeroAlunos += obj[objKeys[i]].numeroEstudantes; // desta forma seria o mesmo de acessar = allLessons.lesson1.numeroEstudantes, fazendo isso para as 3 lessons
  }
  return numeroAlunos;
}

console.log(`O número total de estudantes é: ${getAllStudents(allLessons)}`);
console.log('-------------------------------------');