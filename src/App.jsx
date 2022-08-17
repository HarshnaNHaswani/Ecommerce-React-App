import { useEffect } from "react";
import "./App.css";
import { Alert } from "components";
import { useAlert, useAuth, useTheme } from "context";
import { Router } from "router";

function App() {
  const { showAlert } = useAlert();
  const { setIsLoggedIn } = useAuth();
  useEffect(() => {
    const token = localStorage.getItem("token") ?? '';
    const storedUser = JSON.parse(localStorage.getItem("user")) ?? {};
    const lengthOfStoredUser = Object.keys(storedUser)?.length ?? 0;
    if (lengthOfStoredUser > 0 && token.length > 0 ) {
      showAlert({
        text: `Welcome back ${storedUser.firstName ?? ""}!`,
        status: "success",
      });
      return;
    }
    if (lengthOfStoredUser || token?.length > 0) {
      showAlert({
        text: "error retrieving user data, Please login",
        status: "error",
      });
      setIsLoggedIn(false);
    }
  }, []);
  const { theme } = useTheme();
  return (
    <div className={`bg-default ${theme.dark ? "dark" : ""}`}>
      <Router />
      <Alert />
    </div>
  );
}

export default App;
