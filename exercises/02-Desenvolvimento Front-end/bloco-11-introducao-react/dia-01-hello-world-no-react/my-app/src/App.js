import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (
    <ul>{Task('Aprender React')}</ul>
  );
}

export default App;
