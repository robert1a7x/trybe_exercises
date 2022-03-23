import { Exam, Work } from './escola/Evaluation';
import EvaluationResult from './escola/EvaluationResult';
import Student from './escola/Student';
import Subject from './escola/Subject';
import Teacher from './escola/Teacher';
import OrderItem from './lanchonete/OrderItem';
import Order from './lanchonete/Order';
import OrderRepository from './lanchonete/OrderRepository';

// TESTANDO EXERCICIO 2
const caroline = new Student('Carolina da Silva', new Date('2005/03/17'));
const luca = new Student('Lucas Peixoto Salgueiro', new Date('2006/07/19'));
console.log(caroline);
console.log(luca);

const english = new Subject('Matemática');
const spanish = new Subject('História');

const martin = new Teacher('Marta da Silva', new Date('1980/03/30'), 2000, english);
const jones = new Teacher('João Antônio da Costa', new Date('1982/04/21'), 2000, spanish);
console.log(martin);
console.log(jones);
console.log('\n ####################################### \n');

// TESTANDO EXERCICIO 4
const carolina = new Student('Carolina da Silva', new Date('2005/03/17'));
const lucas = new Student('Lucas Peixoto Salgueiro', new Date('2006/07/19'));

const math = new Subject('Matemática');
const history = new Subject('História');

const marta = new Teacher('Marta da Silva', new Date('1980/03/30'), 2000, math);
const joao = new Teacher('João Antônio da Costa', new Date('1982/04/21'), 2000, history);

const examMath = new Exam(25, marta);
const workMath = new Work(50, marta);
const examHistory = new Exam(25, joao);
const workHistory = new Work(50, joao);

carolina.addEvaluationResult(new EvaluationResult(examMath, 23));
carolina.addEvaluationResult(new EvaluationResult(workMath, 42));
carolina.addEvaluationResult(new EvaluationResult(examHistory, 25));
carolina.addEvaluationResult(new EvaluationResult(workHistory, 50));

console.log('Avaliações: ', carolina.evaluationsResults)
console.log('Soma das notas: ', carolina.soma());
console.log('Média das notas: ', carolina.media());

lucas.addEvaluationResult(new EvaluationResult(examMath, 25));
lucas.addEvaluationResult(new EvaluationResult(workMath, 49));
lucas.addEvaluationResult(new EvaluationResult(examHistory, 20));
lucas.addEvaluationResult(new EvaluationResult(workHistory, 50));

console.log('Avaliações: ', lucas.evaluationsResults)
console.log('Soma das notas: ', lucas.soma());
console.log('Média das notas: ', lucas.media());
console.log('\n ####################################### \n');

// TESTANDO EXERCICIO 5
const carolina2 = new Student('Carolina da Silva', new Date('2005/03/17'));
const lucas2 = new Student('Lucas Peixoto Salgueiro', new Date('2006/07/19'));

const math2 = new Subject('Matemática');
const history2 = new Subject('História');

const marta2 = new Teacher('Marta da Silva', new Date('1980/03/30'), 2000, math2);
const joao2 = new Teacher('João Antônio da Costa', new Date('1982/04/21'), 2000, history2);

const sandwiche = new OrderItem('Sandwiche Natural', 5.00);
const juice = new OrderItem('Suco de Abacaxí', 5.00);
const dessert = new OrderItem('Gelatina de Uva', 2.50);

const carolinaOrder = new Order(carolina2, [sandwiche, juice, dessert], 'dinheiro', 0.10);
const lucasOrder = new Order(lucas2, [sandwiche, juice], 'dinheiro', 0.10);
const martaOrder = new Order(marta2, [sandwiche, juice], 'cartão');
const joaoOrder = new Order(joao2, [sandwiche, juice, dessert], 'cartão');

console.log('Pedido da Carolina: ', carolinaOrder);
console.log('Pedido do Lucas: ', lucasOrder);
console.log('Pedido da Marta: ', martaOrder);
console.log('Pedido do João: ', joaoOrder);
console.log('\n ####################################### \n');

//TESTANDO EXERCICIO 6
const carolina3 = new Student('Carolina da Silva', new Date('2005/03/17'));
const lucas3 = new Student('Lucas Peixoto Salgueiro', new Date('2006/07/19'));

const math3 = new Subject('Matemática');
const history3 = new Subject('História');

const marta3 = new Teacher('Marta da Silva', new Date('1980/03/30'), 2000, math3);
const joao3 = new Teacher('João Antônio da Costa', new Date('1982/04/21'), 2000, history3);

const sandwiche2 = new OrderItem('Sandwiche Natural', 5.00);
const juice2 = new OrderItem('Suco de Abacaxí', 5.00);
const dessert2 = new OrderItem('Gelatina de Uva', 2.50);

const carolinaOrder2 = new Order(carolina3, [sandwiche2, juice2, dessert2], 'dinheiro', 0.10);
const lucasOrder2 = new Order(lucas3, [sandwiche2, juice2], 'dinheiro', 0.10);
const martaOrder2 = new Order(marta3, [sandwiche2, sandwiche2], 'cartão');
const joaoOrder2 = new Order(joao3, [sandwiche, juice, dessert], 'cartão');

const orderRepository = new OrderRepository();
orderRepository.addOrder(carolinaOrder2);
orderRepository.addOrder(lucasOrder2);
orderRepository.addOrder(martaOrder2);
orderRepository.addOrder(joaoOrder2);
orderRepository.addOrder(carolinaOrder2);

console.log('Pedidos da Carolina: ', orderRepository.listByClient(carolina3));
console.log('Maior valor para o menor: ', orderRepository.listBySortedValue('maior'));
console.log('Menor valor para o maior: ', orderRepository.listBySortedValue('menor'));