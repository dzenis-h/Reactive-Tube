import { createContext } from "react";

const defaultContextData = {
  dark: false,
  toggleTheme: () => {},
};

const ThemeContext = createContext(defaultContextData);

export default ThemeContext;
