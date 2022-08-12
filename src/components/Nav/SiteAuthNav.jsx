import React from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { checkActive } from "./checkActive";
import { useAuth } from "../../context/auth-context";
import { useUser } from "../../context/user-context";
import { useCart } from "../../context/cart-context";
import { useWishlist } from "../../context/wishlist-context";

export const SiteAuthNav = () => {
  const { isLoggedIn, setIsLoggedIn } = useAuth();
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

  const location = useLocation();
  const navigate = useNavigate();
  const loginHandler = () => {
    navigate("/login", { replace: true, state: { from: location } });
  };
  return (
    <>
      {!isLoggedIn && (
        <section className="site-auth-nav-wrapper">
          <button className="btn btn-link bg-accent" onClick={loginHandler}>
            Login
          </button>
        </section>
      )}
      {isLoggedIn && (
        <section>
          <button className="btn btn-link bg-accent" onClick={logoutHandler}>
            <Link key={"home"} to="/">
              logout
            </Link>
          </button>
        </section>
      )}
    </>
  );
};
