import Pessoa from './Person';
import Aluno from './Aluno';
import Subject from './Subject';
import Teacher from './Teacher';

// TESTANDO CLASSE MAE DE PESSOAS
const maria = new Pessoa('Maria da Consolação', new Date('1980/01/25'));
const luiza = new Pessoa('Luiza Andrade', new Date('2005/10/02'));
const robert = new Pessoa('Robert Nascimento', new Date('1996/08/07'));

console.log(maria);
console.log(luiza);
console.log(robert);

// TESTANDO A CLASSE FILHA DE ESTUDANTES
const carolina = new Aluno('Carolina da Silva', new Date('2005/03/17'));
const lucas = new Aluno('Lucas Peixoto Salgueiro', new Date('2006/07/19'));
const jessica = new Aluno('Jéssica Bianca Nunes', new Date('2004/06/06'));
const tamires = new Aluno('Tamires Santos Bastos', new Date('2005/11/05'));
const fernando = new Aluno('Fernando Gonçalves', new Date('2006/09/11'));

carolina.notaProva = [25, 20, 25, 23];
carolina.notaTrabalho = [50, 45];
lucas.notaProva = [25, 20, 25, 23];
jessica.notaTrabalho = [50, 45];
tamires.notaTrabalho = [47, 42];

console.log(carolina);
console.log(lucas);
console.log(jessica);
console.log(tamires);
console.log(fernando);

// TESTANDO A CLASSE SUBJECT
const math = new Subject('Matemática');
const history = new Subject('História');
const philosophy = new Subject('Filosofia');

console.log(math);
console.log(history);
console.log(philosophy);

// TESTANDO A CLASSE TEACHER
const english = new Subject('Matemática');
const spanish = new Subject('História');
const japanese = new Subject('Filosofia');

const marta = new Teacher('Marta da Silva', new Date('1980/03/30'), 2000, english);
const joao = new Teacher('João Antônio da Costa', new Date('1982/04/21'), 2000, spanish);
const lucio = new Teacher('Lucio Teixeira', new Date('1986/01/29'), 2000, japanese);

console.log(marta);
console.log(joao);
console.log(lucio);