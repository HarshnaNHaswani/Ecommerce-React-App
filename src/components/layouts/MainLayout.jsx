import { Footer, MainNav } from "components";
import { Outlet } from "react-router-dom";
import { useWindowDimensions } from "utils";


export const MainLayout = () => {
  const {width} = useWindowDimensions();

  return (
    <div className="layout-container">
      <MainNav />
      <main className={`${width > 960 ? "center-xy" : ''}`}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
