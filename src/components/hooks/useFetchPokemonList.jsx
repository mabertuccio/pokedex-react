import { useState } from "react";
import { useEffect } from "react";

const useFetchPokemonList = () => {
  const API_URL = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0"; // Acá defino la URL de la PokéAPI
  const [pokemonList, setPokemonList] = useState([]); // Acá hago Array Destructuring

  useEffect(() => {
    const getPokemonList = async () => {
      const response = await fetch(API_URL);
      const data = await response.json();
      setPokemonList(data.results);
    };

    getPokemonList();
  }, [API_URL]);

  return pokemonList;
};

export default useFetchPokemonList;
