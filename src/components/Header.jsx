import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage, toggleMode } from "../redux/slice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoon,
  faSun,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";
import "./index.css";

const Header = () => {
  const dispatch = useDispatch();
  const { language, cart, mode } = useSelector((state) => state.site);

  const handleLanguageChange = (lang) => {
    dispatch(setLanguage(lang));
  };

  const handleModeToggle = () => {
    dispatch(toggleMode());
  };

  return (
    <header className={`header ${mode}`}>
      <div className="language-selector">
        <FontAwesomeIcon icon={faLanguage} className="icon" />
        <button
          className={language === "en" ? "active" : ""}
          onClick={() => handleLanguageChange("en")}
        >
          EN
        </button>
        <button
          className={language === "uz" ? "active" : ""}
          onClick={() => handleLanguageChange("uz")}
        >
          UZ
        </button>
      </div>
      <button onClick={handleModeToggle} className="mode-toggle">
        <FontAwesomeIcon icon={mode === "dark" ? faSun : faMoon} />
        {mode === "dark" ? "Light Mode" : "Dark Mode"}
      </button>
    </header>
  );
};

export default Header;
