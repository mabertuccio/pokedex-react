import { useState } from "react";
import { useEffect } from "react";

const useFetchPokemonList = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [offset, setOffset] = useState(0);
  const LIMIT = 20;
  const MAX_POKEMON = 1301;

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
    setOffset((prevOffset) =>
      prevOffset != MAX_POKEMON - LIMIT
        ? prevOffset + LIMIT
        : MAX_POKEMON - LIMIT
    );
  };

  const goToPrevPage = () => {
    setOffset((prevOffset) => (prevOffset != 0 ? prevOffset - LIMIT : 0));
  };

  return { pokemonList, offset, goToNextPage, goToPrevPage };
};

export default useFetchPokemonList;
