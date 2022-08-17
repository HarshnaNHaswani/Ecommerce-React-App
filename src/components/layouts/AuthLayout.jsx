import { AuthNav, Footer } from "components";
import { useWindowDimension } from "context";
import { Outlet } from "react-router-dom";
export const AuthLayout = () => {
  const {windowDimension} = useWindowDimension()
  return (
    <div>
      <AuthNav />
      <main className={`${windowDimension.windowWidth > 560 ? "center-xy" : 'width-sm center-xy'}`}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
