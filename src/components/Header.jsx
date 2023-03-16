import MoonIcon from "./icons/MoonIcon";

const Header = () => {
  return (
    <header className="container mx-auto px-4 pt-8">
      <div className="flex justify-between">
        <h1 className="uppercase text-white font-semibold text-3xl tracking-[0.3em]">Tareas</h1>
        <button><MoonIcon fill="#FFF"/></button>
      </div>
    </header>
  );
};

export default Header;