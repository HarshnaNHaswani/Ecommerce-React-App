import React from "react";
import { NavLink } from "react-router-dom";
import "./nav.css";
import logo from "../../logo.png";
import { checkActive } from "./checkActive";
export const AuthNav = () => {
  return (
    <header className="bg-primary text text-sm nav-header center-xy">
        <h1>
          <NavLink className={checkActive} key={"home"} to="/">
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
            <NavLink className={checkActive} key={"home"} to="/">
              Home
            </NavLink>
          </li>
          <li className="list-item">
            <NavLink className={checkActive} key={"productListing"} to="/product-listing">
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
