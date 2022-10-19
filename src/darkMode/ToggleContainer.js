import React from "react";
import DarkModeToggle from "./DarkModeToggle";

const Toggle = ({ theme, toggleTheme }) => {
  return (
    <DarkModeToggle lightTheme={theme} onClick={toggleTheme.toggleTheme} />
  );
};

export default Toggle;
