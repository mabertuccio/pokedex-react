import PropTypes from "prop-types";
import LinkedIcon from "./icons/LinkedInIcon";
import GitHubIcon from "./icons/GitHubIcon";

const Link = ({ socialURL, logoSVG }) => {
  return (
    <a className=" mr-3" href={socialURL} target="_blank">
      {logoSVG}
    </a>
  );
};

Link.propTypes = {
  socialURL: PropTypes.string,
  logoSVG: PropTypes.element,
};

const Links = () => {
  return (
    <div className="flex flex-row mt-4">
      <Link
        socialURL="https://www.linkedin.com/in/matiasbertuccio"
        logoSVG={LinkedIcon}
      />
      <Link
        socialURL="https://www.github.com/mabertuccio"
        logoSVG={GitHubIcon}
      />
    </div>
  );
};

export default Links;
