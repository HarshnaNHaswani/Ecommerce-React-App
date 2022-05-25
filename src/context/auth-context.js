import { useEffect } from "react";

const { createContext, useState, useContext } = require("react");

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState('');
  useEffect(() => {
    if (token && token.trim().length > 0) {
      setIsLoggedIn(true);
    }
  }, []);
  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
