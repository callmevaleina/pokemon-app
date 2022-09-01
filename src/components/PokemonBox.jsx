import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';

const PokemonBox = () => {
    const [pokemon, setPokemon] = useState({})

    const idRandom = Math.floor(Math.random()*248)

    useEffect(()=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/${idRandom}/`)
        .then(res => setPokemon(res.data))
    }, [])

    console.log(pokemon);

    const changePokemon = ()=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/${idRandom}/`)
        .then(res => setPokemon(res.data))
    };

   const [hectograms, setHectograms] = useState(true)

   const changeKilograms =()=>{
    setHectograms(!hectograms)
   }
  
    return (
        <div className="container">
             <div className='pokemon-container'>
                <h1>{pokemon.name}</h1>
                <img src={pokemon.sprites?.front_default} alt="" />
                <div className="pokemon-info">
                    <p><b>weight:</b> {hectograms ? `${pokemon.weight} hectograms` : `${pokemon.weight/10} kilograms`} </p>
                    <p><b>height:</b>{pokemon.height} decimeters</p>
                    <p><b>type:</b> {pokemon.types?.[0].type.name}</p>
                </div>

                <button onClick={changeKilograms} className='change-kilograms'>
                    change to kilograms
                </button>
                
                <button onClick={changePokemon} className='change-pokemon'>
                    <i className="fa-solid fa-angles-right"></i>
                </button>
            </div>
        </div>
       
    );
};

export default PokemonBox;