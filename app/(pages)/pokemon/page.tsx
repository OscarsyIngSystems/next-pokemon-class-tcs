'use client'
import type { Pokemon } from "@/app/interfaces/pokemon.model"
import axios from "axios"
import { useEffect, useState } from "react"
import './pokemon.style.scss'

function Pokemon() {

  const [pokemon, setPokemon] = useState<Pokemon>()

  const getPokemons = async (namePokemon: string) => {
    try {
      let query = await axios.get(`https://pokeapi.co/api/v2/pokemon/${namePokemon}`)
      setPokemon(query.data)
      console.log(query.data)
      return query.data
    } catch (error) {
      console.log(`El error es: ${error}`)
    }
  }

  useEffect(() => {
    getPokemons("articuno")
  }, [])

  return (
    <div>
      {
        pokemon ? (<>
          <img src={pokemon.sprites.front_default} alt="Image de pokemon" className="img__pokemon"/>
          <h1>{pokemon?.name.toUpperCase()}</h1>
        </>) : <h3>No existe el pokemon</h3>
      }

    </div>
  )
}

export default Pokemon