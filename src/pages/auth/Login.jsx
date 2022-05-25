import React from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../context/auth-context";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/user-context";
import axios from "axios";
import { useEffect } from "react";

export const Login = () => {
  const initialData = {
    email: "",
    password: "",
    rememberMe: true,
  };
  const { updateAllUserDetails } = useUser();
  const [loginData, setLoginData] = useState(initialData);
  const [loadState, setLoadState] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation();
  const { setToken, setIsLoggedIn } = useAuth();
  const navigate = useNavigate();
  const loginHandler = async (event) => {
    event.preventDefault();
    try {
      setLoadState(true);
      setError(null);
      const response = await axios.post("/api/auth/login", {
        email: loginData.email,
        password: loginData.password,
      });
      if (response.status === 200) {
        setLoadState(false);
        setError(null);
        setIsLoggedIn(true);
        updateAllUserDetails({ ...response.data.foundUser, address: [] });
        if (loginData.rememberMe) {
          localStorage.setItem("token", response.data.encodedToken);
          setToken(response.data.encodedToken);
          localStorage.setItem(
            "user",
            JSON.stringify({
              firstName: response.data.foundUser.firstName,
              lastName: response.data.foundUser.lastName,
              email: response.data.foundUser.email,
            })
          );
          sessionStorage.setItem("token", response.data.encodedToken);
        } else sessionStorage.setItem("token", response.data.encodedToken);
        setLoginData(initialData);
        location?.state?.from?.pathname
          ? navigate(location.state.from.pathname, { replace: true })
          : navigate("/");
      } else {
        setError("An Error Occurred! Try again later");
      }
    } catch (error) {
      setLoadState(false);
      switch (error?.response?.status ?? 0) {
        case 401: {
          setError("Wrong Password! Try again");
          setLoginData((prev) => ({ ...prev, password: "" }));
          break;
        }
        case 404: {
          setError("User not found! Please check your email");
          setLoginData(initialData);
          break;
        }
        default:
          setError("An Error Occured! Please try again later");
          setLoginData(initialData);
      }
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/");
    }
  }, []);
  return (
    <>
      {error && <p className="status-error-outline status-error-bg">{error}</p>}
      {loadState && (
        <p className="status-info-outline status-info-bg">Loading...</p>
      )}
      <form className="form">
        <div
          className={`form-item ${
            loginData.email ? "status-success-outline" : "status-plain-outline"
          }`}
        >
          <input
            type="email"
            className="form-input"
            id="email"
            placeholder="email address"
            aria-label="email"
            autoComplete="email"
            value={loginData.email}
            required
            onChange={(event) =>
              setLoginData((prev) => ({ ...prev, email: event.target.value }))
            }
          />
          <label htmlFor="email">
            <small>Enter Email</small>
          </label>
        </div>

        <div
          className={`form-item ${
            loginData.password
              ? "status-success-outline"
              : "status-plain-outline"
          }`}
        >
          <input
            type="password"
            id="password"
            className="form-input password"
            placeholder="password"
            aria-label="password"
            autoComplete="password"
            required
            value={loginData.password}
            onChange={(event) =>
              setLoginData((prev) => ({
                ...prev,
                password: event.target.value,
              }))
            }
          />
          <label htmlFor="password">
            <small>Enter password</small>
          </label>
        </div>
        <p className="form-item checkbox-wrapper">
          <input
            type="checkbox"
            name="login"
            id="remember"
            checked={loginData.rememberMe}
            onChange={() =>
              setLoginData((prev) => ({
                ...prev,
                rememberMe: !prev.rememberMe,
              }))
            }
          />
          <label htmlFor="remember" className="label form-label checkbox-label">
            Remember Me
          </label>
        </p>
        <Link to="/forgot-password" className="form-item">
          Forgot your password?
        </Link>
        <button type="submit" className="btn bg-accent" onClick={loginHandler}>
          login
        </button>
        <Link to="/signup" className="form-item">
          Create an account &gt;
        </Link>
      </form>
    </>
  );
};
