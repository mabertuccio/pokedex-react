import PropTypes from "prop-types";

const LogoContainer = ({ containerClass, logoClass, logoURL }) => {
  return (
    <div className={containerClass}>
      <img className={logoClass} src={logoURL} />
    </div>
  );
};

LogoContainer.propTypes = {
  containerClass: PropTypes.string,
  logoClass: PropTypes.string,
  logoURL: PropTypes.string,
};

export default LogoContainer;
