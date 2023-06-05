import { useContext } from "react";
import { DarkModeContext } from "./context/DarkModeContext";

const Lightswitch = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const handleClick = () => {
    toggleDarkMode();
  };
  return (
    <div className="Lightswitch">
      <img
        src={darkMode ? `../img/themeswitch.png` : `../img/themeswitch.png`}
        alt="Themeswitch"
        onClick={handleClick}
      />
    </div>
  );
};

export default Lightswitch;
