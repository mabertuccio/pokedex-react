import PropTypes from "prop-types";
import SearchButton from "./SearchButton";
import SearchIcon from "./icons/SearchIcon";

const SearchBar = () => {
  return (
    <div className="mb-4 flex justify-center items-center">
      <input
        type="text"
        placeholder="Search Pokémon..."
        className="w-80 px-4 py-2 ml-2 mr-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition-colors"
      />
      <SearchButton searchIcon={SearchIcon} />
    </div>
  );
};

SearchBar.propTypes = {
  SearchIcon: PropTypes.element,
};

export default SearchBar;
