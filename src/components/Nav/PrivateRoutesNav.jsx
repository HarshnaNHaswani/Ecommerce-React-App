import React from "react";
import { NavLink } from "react-router-dom";
import { checkActive } from "utils";
import wishListFilledIcon from "assets/wishlist-filled.png";
import cartFilledIcon from "assets/cart-filled.png";
import { useState } from "react";

export function PrivateRoutesNav() {
  const [privateMenu, togglePrivateMenu] = useState(false);
  const togglePrivateMenuHandler = () => togglePrivateMenu((prev) => !prev);
  return (
    <div className="private-menu-wrapper">
      <button
        className="btn btn-hamburger outline-secondary"
        onClick={togglePrivateMenuHandler}
      >
        <span className="text text-lg">☰</span>
      </button>
      {privateMenu && (
        <nav className="nav nav-site center-xy private-menu bg-secondary">
          <ul className="list list-inline center-x">
            <li
              className="list-item"
              onClick={() => togglePrivateMenuHandler()}
            >
              <NavLink key={"wishlist"} className={checkActive} to="/wishlist">
                <button className="btn btn-icon" title="WishList">
                  <span>
                    <img src={wishListFilledIcon} alt="" className="icon" />
                  </span>
                  WishList
                </button>
              </NavLink>
            </li>
            <li
              className="list-item"
              onClick={() => togglePrivateMenuHandler()}
            >
              <NavLink key={"cart"} className={checkActive} to="/cart">
                <button className="btn btn-icon" title="Cart">
                  <span>
                    <img src={cartFilledIcon} alt="" className="icon" />
                  </span>
                  Cart
                </button>
              </NavLink>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}
