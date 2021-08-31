import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  render() {
    const { pokemons } = this.props;
    return (
      <div className='pokemon-list'>
        {pokemons.map((pokemon) => <Pokemon key={pokemon.id} pokemonInfo={pokemon} />)}
      </div>
    )
  }
}

export default Pokedex;