import React from "react";
import { Outlet } from "react-router-dom";
import { useWindowDimension } from "../../context/window-context";
import { Footer } from "../Footer";
import { MainNav } from "../Nav/MainNav";

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
