'use client'
import axios from "axios"
import { useState } from "react"

function Pokemon() {

    const [pokemon, setPokemon] = useState()
    
    const getPokemons = async () => {
        try {
            let query = axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
        } catch (error) {
            console.log(`El error es: ${error}`)
        }
    }
    

  return (
    <div>Pokemon</div>
  )
}

export default Pokemon