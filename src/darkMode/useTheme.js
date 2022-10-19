import React, { useEffect, useState, useContext } from "react";
import { ThemeProvider as EmotionThemeProvider } from "emotion-theming";
import theme from "./basicTheme";
import ThemeContext from "./ThemeContext";

const useTheme = () => useContext(ThemeContext);

const useEffectDarkMode = () => {
  const [themeState, setThemeState] = useState({
    dark: false,
    hasThemeMounted: false,
  });

  useEffect(() => {
    const lsDark = localStorage.getItem("dark") === "true";
    setThemeState({
      ...themeState,
      dark: lsDark,
      hasThemeMounted: true,
    });
    // eslint-disable-next-line
  }, []);

  return [themeState, setThemeState];
};

const ThemeProvider = ({ children }) => {
  const [themeState, setThemeState] = useEffectDarkMode();

  if (!themeState.hasThemeMounted) {
    return <div />;
  }

  const toggleTheme = () => {
    const dark = !themeState.dark;
    localStorage.setItem("dark", JSON.stringify(dark));
    setThemeState({ ...themeState, dark });
  };

  const computedTheme = themeState.dark ? theme("dark") : theme("light");

  return (
    <EmotionThemeProvider theme={computedTheme}>
      <ThemeContext.Provider
        value={{
          dark: themeState.dark,
          toggleTheme,
        }}
      >
        {children}
      </ThemeContext.Provider>
    </EmotionThemeProvider>
  );
};

export { ThemeProvider, useTheme };
