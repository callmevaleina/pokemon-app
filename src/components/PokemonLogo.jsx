import React from 'react';
import pokemon_logo from '../assets/pokemon_logo.png'

const PokemonLogo = () => {
    return (
        <div className='pokemon-logo floating'>
            <img src={pokemon_logo} alt="" />
        </div>
    );
};

export default PokemonLogo;