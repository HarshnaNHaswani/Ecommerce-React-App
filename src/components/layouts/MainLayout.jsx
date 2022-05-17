import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "../Footer";
import { MainNav } from "../Nav/MainNav";

export const MainLayout = () => {
  return (
    <div>
      <MainNav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
