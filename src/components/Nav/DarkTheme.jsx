import React from "react";
import { useTheme } from "context";

export const DarkTheme = () => {
  const { theme, toggleDarkTheme } = useTheme();
  return (
    <button className={`btn bg-default ${theme.dark ? "dark" : ""} btn-toggle-theme`} onClick={toggleDarkTheme}>
      {
        theme.dark && 
        <>
          <span className="invisible">...</span>
          <span role="img" aria-label="dark" className="round bg-secondary">🌜</span>
        </>
      }
      {
        !theme.dark && 
        <>
          <span role="img" aria-label="light" className="round bg-secondary">🌞</span>
          <span className="invisible">...</span>
        </>
      }
    </button>
  );
};
