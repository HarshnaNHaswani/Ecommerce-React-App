import React from "react";
import { DarkTheme, Logo, PrivateRoutesNav, PublicRoutesNav, SearchBar, SiteAuthNav } from ".";
import "./nav.css";


export const MainNav = () => {
  return (
      <header className="bg-primary text text-sm nav-header center-xy">
        <Logo />
        <PublicRoutesNav />
        <SearchBar />
        <PrivateRoutesNav />
        <SiteAuthNav />
        <DarkTheme />
      </header>
  );
};
