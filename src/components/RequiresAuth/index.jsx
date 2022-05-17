import { Navigate } from "react-router-dom";

export function RequiresAuth({ children }) {
  const isLoggdedIn = false
  return isLoggdedIn ? children : <Navigate to="/login" replace />;
}