import pokemons from './data';
import Pokedex from './components/Pokedex';
import './App.css';


function App() {
  return (
    <main className='main-container'>
      <Pokedex  pokemons= { pokemons }/>
    </main>
  );
}

export default App;
