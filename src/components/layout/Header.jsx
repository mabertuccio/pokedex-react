import IconContainer from "../common/IconContainer";

const Header = () => {
  return (
    <header className="bg-blue-400 px-6 flex justify-center">
      <IconContainer
        containerClass="max-w-6xl p-2"
        iconClass="w-10 hover:rotate-[-6deg] transition cursor-pointer"
        iconURL="../public/pokeball.png"
      />
    </header>
  );
};

export default Header;
