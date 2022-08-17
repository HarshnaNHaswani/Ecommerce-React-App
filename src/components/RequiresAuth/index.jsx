import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "context"
export function RequiresAuth({ children }) {
  const location = useLocation();
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}