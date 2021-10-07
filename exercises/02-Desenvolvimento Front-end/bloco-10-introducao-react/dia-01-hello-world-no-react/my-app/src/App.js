import './App.css';

// 1 - Crie uma lista de tarefas, chame a função dentro do seu componente App. Insira o valor que você quiser, salve a página e inicie-a rodando o comando npm start
const Task = (value) => {
  return (
    <li key ={value}>{value}</li>
  );
}

// 2 - crie uma array de compromissos e use a função map para que cada item do array apareça, como um item de lista, no seu componente App 
const array = ['Andar', 'Treinar Javascript', 'Pesquisar bicicleta', 'Jogar MHW'];

function App() {
  return (
    <ul>
      {Task('Aprender React')}
      {array.map((element) => Task(element))}
    </ul>
  );
}

export default App;
