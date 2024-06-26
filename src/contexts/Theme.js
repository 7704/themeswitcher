import React from "react";
import { useContext, createContext } from "react";

const ThemeContext = createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});

const ThemeProvider = ThemeContext.Provider;

function useTheme() {
  return useContext(ThemeContext);
}

export { ThemeContext, ThemeProvider };

export default useTheme;
