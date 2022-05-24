import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./nav.css";
import logo from "../../logo.png";
import { checkActive } from "./checkActive";
import { useAuth } from "../../context/auth-context";
import wishListFilledIcon from "../../assets/wishlist-filled.png";
import cartFilledIcon from "../../assets/cart-filled.png";
import { useState } from "react";
import { useUser } from "../../context/user-context";
import { useCart } from "../../context/cart-context";
import { useWishlist } from "../../context/wishlist-context";
export const MainNav = () => {
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const [privateMenu, togglePrivateMenu] = useState(false);
  const togglePrivateMenuHandler = () => togglePrivateMenu((prev) => !prev);
  const { resetUser } = useUser();
  const { setCartToInitialState } = useCart();
  const { setWishlistToInitialState } = useWishlist();
  const logoutHandler = () => {
    setIsLoggedIn(false);
    localStorage.setItem("token", "");
    sessionStorage.setItem("token", "");
    resetUser();
    setCartToInitialState();
    setWishlistToInitialState();
  };
  return (
    <>
      <header className="bg-primary text text-sm nav-header center-xy">
        <h1>
          <Link to="/">
            {" "}
            <img
              src={logo}
              alt="Meltin' Moments"
              srcSet=""
              className="logo"
              title="Meltin' Moments"
            />
          </Link>
        </h1>
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
        <button
          className="btn btn-toggle outline-secondary"
          onClick={togglePrivateMenuHandler}
        >
          <span className="text text-lg">&#8942;</span>
        </button>
        {privateMenu && (
          <nav className="nav nav-site center-xy private-menu">
            <ul className="list list-inline center-x">
              <li className="list-item">
                <NavLink
                  key={"wishlist"}
                  className={checkActive}
                  to="/wishlist"
                >
                  <button className="btn btn-icon" title="WishList">
                    <span>
                      <img
                        src={wishListFilledIcon}
                        role="icon"
                        alt=""
                        className="icon"
                      />
                    </span>
                    WishList
                  </button>
                </NavLink>
              </li>
              <li className="list-item">
                <NavLink key={"cart"} className={checkActive} to="/cart">
                  <button className="btn btn-icon" title="Cart">
                    <span>
                      <img
                        src={cartFilledIcon}
                        role="icon"
                        alt=""
                        className="icon"
                      />
                    </span>
                    Cart
                  </button>
                </NavLink>
              </li>
            </ul>
          </nav>
        )}
        {!isLoggedIn && (
          <section>
            <button className="btn btn-link outline-secondary">
              <NavLink key={"signup"} className={checkActive} to="/signup">
                Sign Up
              </NavLink>
            </button>
            <button className="btn btn-link bg-accent">
              <NavLink key={"login"} className={checkActive} to="/login">
                Login
              </NavLink>
            </button>
          </section>
        )}
        {isLoggedIn && (
          <section>
            <button className="btn btn-link bg-accent" onClick={logoutHandler}>
              <NavLink key={"home"} className={checkActive} to="/">
                logout
              </NavLink>
            </button>
          </section>
        )}
      </header>
    </>
  );
};
