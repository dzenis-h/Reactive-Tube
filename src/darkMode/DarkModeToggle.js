import React from "react";

import Toggle from "./ToggleTheme";
import { useTheme } from "./useTheme";

const DarkModeToggle = () => {
  const darkMode = useTheme(false);

  const { dark, toggleTheme } = darkMode;

  return (
    <div className="dark-mode-toggle">
      <button
        type="button"
        onClick={toggleTheme}
        className={dark ? "light-icon__reverse" : "light-icon"}
      >
        ☀
      </button>
      <Toggle checked={dark} onChange={toggleTheme} />
      <button
        type="button"
        onClick={toggleTheme}
        className={dark ? "dark-icon__reverse" : "dark-icon"}
      >
        {/* ☾ */}★
      </button>
    </div>
  );
};

export default DarkModeToggle;
