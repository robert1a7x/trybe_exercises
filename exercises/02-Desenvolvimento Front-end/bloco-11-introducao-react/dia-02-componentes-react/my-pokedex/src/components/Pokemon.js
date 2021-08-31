import React from 'react';

class Pokemon extends React.Component {
  render() {
    const { pokemonInfo } = this.props;

    return (
      <div className='pokemon-container'>
        <h1> {pokemonInfo.name } </h1>
        <h3> { pokemonInfo.type } </h3>
        <p>Peso médio: { pokemonInfo.averageWeight.value } {pokemonInfo.averageWeight.measurementUnit}</p>
        <div className='poke-image'>
          <img src={pokemonInfo.image} alt={pokemonInfo.name} />
        </div>
      </div>
    )
  }
}

export default Pokemon;