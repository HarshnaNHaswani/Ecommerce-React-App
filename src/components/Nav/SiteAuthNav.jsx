import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth, useCart, useUser, useWishlist } from "context";

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
