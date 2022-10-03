import { AuthNav, Footer } from "components";
import { Outlet } from "react-router-dom";
import { useWindowDimensions } from "utils";
export const AuthLayout = () => {
  const {width} = useWindowDimensions()
  return (
    <div className="layout-container auth-container">
      <AuthNav />
      <main className={`${width > 560 ? "center-xy" : 'width-sm center-xy'}`}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
