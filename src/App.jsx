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
    }
  }, []);
  const { theme } = useTheme();
  return (
    <div className={`App bg-default ${theme.dark ? "dark" : ""}`}>
      <Router />
      <Alert />
    </div>
  );
}

export default App;
