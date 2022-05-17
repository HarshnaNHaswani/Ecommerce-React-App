import React from "react";
import { NavLink } from "react-router-dom";
import "./nav.css";
import logo from "../../logo.png";
import { checkActive } from "./checkActive";

export const MainNav = () => {
  const isLoggdedIn = false;
  return (
    <header className="bg-primary text text-sm nav-header center-xy">
        <h1>
          <NavLink key={"home"} className={checkActive} to="/">
            {" "}
            <img
              src={logo}
              alt="Meltin' Moments"
              srcSet=""
              className="logo"
              title="Meltin' Moments"
            />
          </NavLink>
        </h1>
        <div className="form-item status-plain-outline">
          <input
            type="search"
            name="search"
            id="search"
            className="form-input"
            placeholder="search"
            aria-label="search"
            autoComplete="name"
          />
        </div>
      <nav className="nav nav-site center-xy">
        <ul className="list list-inline">
          <li className="list-item">
            <NavLink key={"cart"} className={checkActive} to="/cart">
              Cart
            </NavLink>
          </li>
          <li className="list-item">
            <NavLink key={"wishlist"} className={checkActive} to="/wishlist">
              Wishlist
            </NavLink>
          </li>
          <li className="list-item">
            <NavLink
              key={"productListing"}
              className={checkActive}
              to="/product-listing"
            >
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
      { !isLoggdedIn &&
        <section>
          <button className="btn btn-link outline-accent">
            <NavLink key={"signup"} className={checkActive} to="/signup">
              Sign Up
            </NavLink>
          </button>
          {" / "}
          <button className="btn btn-link bg-accent">
            <NavLink key={"login"} className={checkActive} to="/login">
              Login
            </NavLink>
          </button>
        </section>
      }
    </header>
  );
};
