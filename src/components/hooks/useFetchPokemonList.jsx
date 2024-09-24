import { useState } from "react";
import { useEffect } from "react";

const useFetchPokemonList = () => {
  const [pokemonList, setPokemonList] = useState([]); // Acá hago Array Destructuring
  const [offset, setOffset] = useState(0);
  const LIMIT = 20;

  const API_URL = `https://pokeapi.co/api/v2/pokemon?limit=${LIMIT}&offset=${offset}`;

  useEffect(() => {
    const getPokemonList = async () => {
      const response = await fetch(API_URL);
      const data = await response.json();
      setPokemonList(data.results);
    };

    getPokemonList();
  }, [API_URL]);

  const goToNextPage = () => {
    setOffset((prevOffset) => prevOffset + 20);
  };

  const goToPrevPage = () => {
    setOffset((prevOffset) => prevOffset - 20);
  };

  return { pokemonList, offset, goToNextPage, goToPrevPage };
};

export default useFetchPokemonList;
