import { DarkTheme, Logo, PublicRoutesNav, SearchBar } from ".";
import "./nav.css";
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
