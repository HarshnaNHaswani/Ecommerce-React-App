import { Outlet } from "react-router-dom";
import { Footer } from "../Footer";
import { AuthNav } from "../Nav/AuthNav";

export const AuthLayout = () => {
  return (
    <div>
      <AuthNav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
