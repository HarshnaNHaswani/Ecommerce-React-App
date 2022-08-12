import { Outlet } from "react-router-dom";
import { Footer } from "../Footer";
import { AuthNav } from "../Nav/AuthNav";
import { useWindowDimension } from "../../context/window-context";
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
