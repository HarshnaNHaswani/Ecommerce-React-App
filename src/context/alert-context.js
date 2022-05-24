const { createContext, useState, useContext } = require("react");

const AlertContext = createContext();

const AlertProvider = ({ children }) => {
  const initialState = { display: false, text: "", status:"" }
  const [alert, setAlert] = useState(initialState);
  const hideAlert = () => setAlert(initialState);
  const showAlert = ({text, status}) => {
    setAlert({ display: true, text, status });
    setTimeout(hideAlert, 5000);
  };
  return (
    <AlertContext.Provider value={{ alert, showAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

const useAlert = () => useContext(AlertContext);

export { AlertProvider, useAlert };
