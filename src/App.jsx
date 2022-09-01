import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from 'axios'
import PokemonBox from './components/PokemonBox'
import PokemonLogo from './components/PokemonLogo'
import Ash from './components/Ash'
import Pokeball from './components/Pokeball'

function App() {
  

  return (
    <div className="App">
      <PokemonLogo />
      <Pokeball />
      <Ash />
      <PokemonBox />
    </div>
  )
}

export default App
