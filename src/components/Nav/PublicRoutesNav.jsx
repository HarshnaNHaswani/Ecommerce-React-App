import React from "react";
import { NavLink } from "react-router-dom";
import { checkActive } from "./checkActive";

export function PublicRoutesNav() {
  return (
    <nav className="nav nav-site center-xy">
      <ul className="list list-inline">
        <li className="list-item">
          <NavLink key={"home"} className={checkActive} to="/">
            Home
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
  );
}
