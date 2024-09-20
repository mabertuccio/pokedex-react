import { useState, useEffect } from "react";

const useFetchPokemonDetails = (pokemonID) => {
  const BASE_URL = `https://pokeapi.co/api/v2/pokemon/${pokemonID}`;
  const [pokemonDetails, setPokemonDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!pokemonID) {
      setPokemonDetails(null);
      setLoading(false);
      return;
    }

    const getPokemonDetails = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(BASE_URL);
        if (!response.ok) throw new Error("Error fetching Pokémon details");
        const data = await response.json();
        setPokemonDetails(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getPokemonDetails();
  }, [BASE_URL, pokemonID]);

  return { pokemonDetails, loading, error };
};

export default useFetchPokemonDetails;
