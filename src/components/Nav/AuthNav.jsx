import React from "react";
import { DarkTheme } from "./DarkTheme";
import { Logo } from "./Logo";
import "./nav.css";
import { PublicRoutesNav } from "./PublicRoutesNav";
import { SearchBar } from "./SearchBar";
export const AuthNav = () => {
  return (
    <header className="bg-primary text text-sm nav-header center-xy">
      <Logo />
      <SearchBar />
      <PublicRoutesNav />
      <DarkTheme />
    </header>
  );
};
