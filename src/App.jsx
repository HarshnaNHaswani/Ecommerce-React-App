import { useEffect } from "react";
import "./App.css";
import { Alert } from "./components/Alert/alert";
import { useAlert } from "./context/alert-context";
import { Router } from "./router/Router";
import {useAuth} from "./context/auth-context"
function App() {
  const { showAlert } = useAlert();
  const {setIsLoggedIn} = useAuth()
  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const lengthOfStoredUser = Object.keys(storedUser).length
    if (lengthOfStoredUser > 0 && token.trim().length > 0) {
      showAlert({ text: `Welcome back ${storedUser.firstName?? ''}!`, status: 'success' });
      return;
    } 
    if(lengthOfStoredUser || token.length > 0) {
      showAlert({ text: 'error retrieving data, Please login again', status: 'error' })
      setIsLoggedIn(false)
    }
  }, []);

  return (
    <>
      <Router />
      <Alert />
    </>
  );
}

export default App;
