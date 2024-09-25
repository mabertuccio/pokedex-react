import PropTypes from "prop-types";

const Author = ({ authorClass, authorName }) => {
  return (
    <div>
      <p className={authorClass}>Pokédex by {authorName}</p>
    </div>
  );
};

Author.propTypes = {
  authorClass: PropTypes.string,
  authorName: PropTypes.string,
};

export default Author;
