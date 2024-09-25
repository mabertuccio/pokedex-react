import PropTypes from "prop-types";

const SearchButton = ({ searchIcon }) => {
  return (
    <button className="bg-blue-400 hover:bg-blue-500 transition-colors rounded-md p-1 w-10 h-10 flex items-center justify-center">
      {searchIcon}
    </button>
  );
};

SearchButton.propTypes = {
  searchIcon: PropTypes.element,
};

export default SearchButton;
