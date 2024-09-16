import Author from "./small/Author";
import Links from "./small/Links";

const Footer = () => {
  return (
    <footer className="pt-8 flex flex-col items-center justify-center">
      <Author
        authorClass="text-sm text-slate-600"
        authorName="Matias Bertuccio"
      />
      <Links />
    </footer>
  );
};

export default Footer;
