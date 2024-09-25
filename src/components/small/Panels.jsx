import { useState } from "react";
import PropTypes from "prop-types";
import useFetchPokemonList from "../hooks/useFetchPokemonList";
import useFetchPokemonDetails from "../hooks/useFetchPokemonDetails";
import "./statics.css";
import PreviousLogo from "./logos/PreviousLogo";
import NextLogo from "./logos/NextLogo";

const PokemonItem = ({ id, name, url, handleClick }) => {
  return (
    <li
      className="mb-2 cursor-pointer hover:border border-slate-600 p-1 rounded-md active:border-blue-500"
      data-url={url}
      id={id}
      onClick={handleClick}
    >
      {name}
    </li>
  );
};

PokemonItem.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  url: PropTypes.string,
  handleClick: PropTypes.func,
};

const Loading = ({ isLoading }) => {
  return (
    <img
      className={`mb-4 w-10 block self-center m-4 animate-spin ${
        !isLoading ? "hidden" : ""
      }`}
      src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png"
      alt="PokéBall Spinning"
    />
  );
};

Loading.propTypes = {
  isLoading: PropTypes.bool,
};

const PokemonSprite = ({ isLoading, id }) => {
  return (
    <img
      className={`mb-4 w-24 self-center m-4 ${isLoading ? "hidden" : ""}`}
      src={
        !isLoading
          ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
          : ""
      }
    />
  );
};

PokemonSprite.propTypes = {
  isLoading: PropTypes.bool,
  id: PropTypes.number,
};

const PokemonListPanel = ({ pokemonList, onPokemonSelect, offset }) => {
  const handleClick = (id) => {
    onPokemonSelect(id);
  };

  return (
    <div className="bg-white border border-gray-300 rounded-md p-4 m-4 w-72 h-96 overflow-scroll overflow-x-hidden">
      <h2 className="text-lg font-semibold mb-4 text-center">Pokémon List</h2>
      <hr className="m-2 border-t-2 border-gray-300" />
      <ul>
        {pokemonList.map((pokemon, index) => (
          <PokemonItem
            id={index + offset + 1}
            key={pokemon.name}
            name={pokemon.name}
            url={pokemon.url}
            handleClick={() => handleClick(index + offset + 1)}
          />
        ))}
      </ul>
    </div>
  );
};

PokemonListPanel.propTypes = {
  pokemonList: PropTypes.array.isRequired,
  onPokemonSelect: PropTypes.func.isRequired,
  offset: PropTypes.number,
};

const PokemonDetailsPanel = ({ pokemonID }) => {
  const { pokemonDetails, loading, error } = useFetchPokemonDetails(pokemonID);

  return (
    <div className="bg-white border border-gray-300 rounded-md p-3 m-4 w-72 h-96">
      <h2 className="text-lg font-semibold mb-4 text-center">
        Pokémon Details
      </h2>
      <hr className="m-2 border-t-2 border-gray-300" />
      <div className="flex justify-center">
        <Loading isLoading={loading} />
        <PokemonSprite isLoading={loading} id={pokemonID} />
      </div>
      <hr className="m-2 border-t-2 border-gray-300" />
      <div className="flex flex-col justify-center text-center">
        {error ? (
          <span className="text-red-500">{error}</span>
        ) : (
          (
            <strong className="text-slate-950">
              {pokemonDetails ? pokemonDetails.name : "Select a Pokémon"}
            </strong>
          ) && (
            <span className="text-slate-600">
              #{String(pokemonID).padStart(4, "0")}
            </span>
          )
        )}
      </div>
      <hr className="m-2 border-t-2 border-gray-300" />
      <div>
        {pokemonDetails && (
          <>
            <p className="text-xs text-gray-600">HP</p>
            <div className="w-full bg-gray-200 rounded-md mb-2">
              <div
                id="pokemon-hp"
                className="h-2 bg-green-500 rounded-md"
                style={{ width: `${pokemonDetails.stats[0]?.base_stat}%` }} // HP
              ></div>
            </div>
            <p className="text-xs text-gray-600">Attack</p>
            <div className="w-full bg-gray-200 rounded-md mb-2">
              <div
                id="pokemon-attack"
                className="h-2 bg-yellow-500 rounded-md"
                style={{ width: `${pokemonDetails.stats[1]?.base_stat}%` }} // Attack
              ></div>
            </div>
            <p className="text-xs text-gray-600">Defence</p>
            <div className="w-full bg-gray-200 rounded-md mb-2">
              <div
                id="pokemon-defence"
                className="h-2 bg-blue-500 rounded-md"
                style={{ width: `${pokemonDetails.stats[2]?.base_stat}%` }} // Defence
              ></div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

PokemonDetailsPanel.propTypes = {
  pokemonID: PropTypes.number,
};

const Button = ({ logoSVG, onClick }) => {
  return (
    <button
      className="flex items-center justify-center px-3 h-8 ms-0 leading-tight bg-slate-300 hover:bg-slate-500 transition-colors rounded"
      onClick={onClick}
    >
      {logoSVG}
    </button>
  );
};

Button.propTypes = {
  logoSVG: PropTypes.element.isRequired,
  onClick: PropTypes.func.isRequired,
};

const Pagination = ({ onNext, onPrevious }) => {
  return (
    <div className="items-center gap-4 flex justify-center">
      <Button logoSVG={PreviousLogo} onClick={onPrevious} />
      <Button logoSVG={NextLogo} onClick={onNext} />
    </div>
  );
};

Pagination.propTypes = {
  onNext: PropTypes.func.isRequired,
  onPrevious: PropTypes.func.isRequired,
};

const Panels = () => {
  const [selectedPokemonID, setSelectedPokemonID] = useState(null);
  const { pokemonList, offset, goToNextPage, goToPrevPage } =
    useFetchPokemonList();

  const handlePokemonSelect = (id) => {
    setSelectedPokemonID(id);
  };

  return (
    <div className="flex gap-2 justify-items-center justify-center">
      <PokemonListPanel
        pokemonList={pokemonList}
        onPokemonSelect={handlePokemonSelect}
        offset={offset}
      />
      <Pagination onNext={goToNextPage} onPrevious={goToPrevPage} />
      <PokemonDetailsPanel pokemonID={selectedPokemonID} />
    </div>
  );
};

export default Panels;
