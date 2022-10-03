import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
const UserContext = createContext();
const UserProvider = ({ children }) => {
  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    address: [],
  };
  const [user, setUser] = useState(initialState);
  const updateAllUserDetails = ({ firstName, lastName, email, address }) =>
    setUser({ firstName, lastName, email, address });
  const resetUser = () => setUser(initialState);
  useEffect(() => {
    const token = localStorage.getItem("token")  ?? '';
    if (token && token.trim().length > 0) {
      sessionStorage.setItem("token", token) 
      const storedUser = JSON.parse(localStorage.getItem("user"));
      sessionStorage.setItem("user", JSON.stringify(storedUser));
      updateAllUserDetails({
        firstName: storedUser.firstName,
        lastName: storedUser.lastName,
        email: storedUser.email,
        address: [],
      });
    }
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        updateAllUserDetails,
        resetUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
const useUser = () => useContext(UserContext);

export { UserProvider, useUser };
