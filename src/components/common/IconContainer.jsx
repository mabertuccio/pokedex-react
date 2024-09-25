import PropTypes from "prop-types";

const IconContainer = ({ containerClass, iconClass, iconURL }) => {
  return (
    <div className={containerClass}>
      <img className={iconClass} src={iconURL} />
    </div>
  );
};

IconContainer.propTypes = {
  containerClass: PropTypes.string,
  iconClass: PropTypes.string,
  iconURL: PropTypes.string,
};

export default IconContainer;
