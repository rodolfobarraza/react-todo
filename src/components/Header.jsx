import { useState } from "react";
import IconMoon from "./icons/IconMoon";
import IconSun from "./icons/IconSun";

const Header = () => {

  const [darkMode, setDarkMode] = useState(false);

  const handleClickToggleTheme = () => {}

  return (
    <header className="container mx-auto px-4 pt-8">
      <div className="flex justify-between">
        <h1 className="uppercase text-white font-semibold text-3xl tracking-[0.3em]">Tareas</h1>
        <button onClick={() => setDarkMode(!darkMode)}>
          {
            darkMode ? <IconSun fill="#ffa41d"/> : <IconMoon fill="#FFF"/>
          }
        </button>
      </div>
    </header>
  );
};

export default Header;