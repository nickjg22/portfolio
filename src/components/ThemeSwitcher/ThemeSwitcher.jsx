import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./ThemeSwitcher.css";

const ThemeSwitcher = ({ darkClassName = "dark" }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === darkClassName) {
      document.documentElement.classList.add(darkClassName);
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove(darkClassName);
      setIsDarkMode(false);
    }
  }, [darkClassName]);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove(darkClassName);
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add(darkClassName);
      localStorage.setItem("theme", darkClassName);
      setIsDarkMode(true);
    }
  };

  return (
    <button data-testid="themeSwitcher" className="theme-switcher-btn" onClick={toggleTheme}>
      {isDarkMode ? "To Light Mode" : "To Dark Mode"}
    </button>
  );
};

ThemeSwitcher.propTypes = {
  darkClassName: PropTypes.string,
};

export default ThemeSwitcher;
