import axios from "axios";
import { createContext } from "react";
import { useContext, useState, useEffect } from "react";

const WindowDimensionContext = createContext();

const WindowDimensionProvider = ({ children }) => {
  const [windowDimension, setWindowDimension] = useState({
    windowHeight: window.innerWidth,
    windowWidth: window.innerHeight,
  });
  const detectSize = () => {
    setWindowDimension({
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
    });
  };
  
  useEffect(() => {
    window.addEventListener("resize", detectSize);

    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [windowDimension]);
  return (
    <WindowDimensionContext.Provider
      value={{
        windowDimension,
      }}
    >
      {children}
    </WindowDimensionContext.Provider>
  );
};

const useWindowDimension = () => useContext(WindowDimensionContext);

export { WindowDimensionProvider, useWindowDimension };
