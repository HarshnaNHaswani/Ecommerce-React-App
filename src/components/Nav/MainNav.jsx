import React from "react";
import "./nav.css";
import { Logo } from "./Logo";
import { SiteAuthNav } from "./SiteAuthNav";
import { PrivateRoutesNav } from "./PrivateRoutesNav";
import { SearchBar } from "./SearchBar";
import { PublicRoutesNav } from "./PublicRoutesNav";
import { DarkTheme } from "./DarkTheme";

export const MainNav = () => {
  return (
      <header className="bg-primary text text-sm nav-header center-xy">
        <Logo />
        <PublicRoutesNav />
        <SearchBar />
        <PrivateRoutesNav />
        <SiteAuthNav />
        <DarkTheme/>
      </header>
  );
};
