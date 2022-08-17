import { useEffect } from "react";

const { createContext, useState, useContext } = require("react");

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState({ dark: true });

  const toggleDarkTheme = () =>
    setTheme((prev) => ({ ...prev, dark: !prev.dark }));

  return (
    <ThemeContext.Provider value={{ theme, toggleDarkTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => useContext(ThemeContext);

export { ThemeProvider, useTheme };
