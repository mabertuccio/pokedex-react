import PropTypes from "prop-types";
import LinkedInLogo from "./logos/LinkedInLogo";
import GitHubLogo from "./logos/GitHubLogo";

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
        logoSVG={LinkedInLogo}
      />
      <Link
        socialURL="https://www.github.com/mabertuccio"
        logoSVG={GitHubLogo}
      />
    </div>
  );
};

export default Links;
