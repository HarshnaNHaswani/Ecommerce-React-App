import { Footer, MainNav } from "components";
import { useWindowDimension } from "context";
import { Outlet } from "react-router-dom";


export const MainLayout = () => {
  const {windowDimension} = useWindowDimension();
  return (
    <div>
      <MainNav />
      <main className={`${windowDimension.windowWidth > 960 ? "center-xy" : ''}`}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
