import LogoContainer from "./small/LogoContainer";

const Header = () => {
  return (
    <header className="bg-blue-400 px-6 flex justify-center">
      <LogoContainer
        containerClass="max-w-6xl p-2"
        logoClass="w-10 hover:rotate-[-6deg] transition cursor-pointer"
        logoURL="../public/pokeball.png"
      />
    </header>
  );
};

export default Header;
