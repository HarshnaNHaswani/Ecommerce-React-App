import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../../context/auth-context";
import { useUser } from "../../context/user-context";
import { useNavigate, useLocation } from "react-router-dom";

export const SignUp = () => {
  const initialState = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    confirmPassword: "",
    acceptTerms: false,
  };
  const navigate = useNavigate();
  const location = useLocation();
  const { setIsLoggedIn, setToken } = useAuth();
  const [signUpData, setSignUpData] = useState(initialState);
  const [loadState, setLoadState] = useState(false);
  const [error, setError] = useState(null);
  const { updateAllUserDetails } = useUser();
  const {
    email,
    password,
    firstName,
    lastName,
    confirmPassword,
    acceptTerms,
  } = signUpData;
  const passwordCheckExpression = new RegExp("^[a-zA-Z]+[0-9]+[a-zA-Z]+$");
  const emailCheckExpression = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const passwordValidation = () =>
    passwordCheckExpression.test(signUpData.password);
  const emailValidation = () => emailCheckExpression.test(signUpData.email);
  const checkFirstNameInput = () =>
    signUpData.firstName.trim().length >= 3 &&
    signUpData.firstName.trim().length <= 15;

  const signUpHandler = async (event) => {
    event.preventDefault();
    try {
      setLoadState(true);
      setError(null);

      if (!signUpData.acceptTerms) {
        setLoadState(false);
        setError("please accept the terms and conditions");
        return;
      }
      if (!checkFirstNameInput()) {
        setLoadState(false);
        setError(
          "Length of first name should be less than 15 characters and more than 3 characters"
        );
        setSignUpData((prev) => ({
          ...prev,
          firstName: "",
        }));
        return;
      }
      if (!passwordValidation()) {
        setLoadState(false);
        setError(
          " 1. Start and end with alphabet,  2. Must contain one number"
        );
        setSignUpData((prev) => ({
          ...prev,
          confirmPassword: "",
          password: "",
        }));
        return;
      }

      if (!emailValidation()) {
        setLoadState(false);
        setError(" Incorrect email format");
        setSignUpData((prev) => ({
          ...prev,
          email: "",
        }));
        return;
      }

      if (signUpData.password !== signUpData.confirmPassword) {
        setLoadState(false);
        setError("Passwords don't match!");
        setSignUpData((prev) => ({
          ...prev,
          confirmPassword: "",
          password: "",
        }));
        return;
      }
      const response = await axios.post("/api/auth/signup", {
        email,
        password,
        firstName,
        lastName,
      });
      // cart = user.cart, wishlist=user.wishlist
      if (response.status === 201) {
        setLoadState(false);
        setError(null);
        setIsLoggedIn(true);
        setSignUpData({
          ...initialState,
        });
        updateAllUserDetails(response.data.createdUser);
        sessionStorage.setItem("token", response.data.encodedToken);
        setToken(response.data.encodedToken);
        location?.state?.from?.pathname
          ? navigate(location.state.from.pathname, { replace: true })
          : navigate("/");
      } else {
        setLoadState(false);
        setError("An Error Occurred! Try again later");
      }
    } catch (error) {
      setLoadState(false);
      if (error.response.status === 422)
        setError("User Already Exists, Login instead!");
      else setError("An Error Occured! Please try again later");
      setSignUpData({ ...initialState });
    }
  };
  return (
    <>
      {error && <p className="status-error-outline status-error-bg">{error}</p>}
      {loadState && (
        <p className="status-info-outline status-info-bg">Loading...</p>
      )}
      <div className="signup ">
        <form className="form">
          <div
            className={`form-item ${
              signUpData.firstName
                ? checkFirstNameInput()
                  ? "status-success-outline"
                  : "status-error-outline"
                : "status-plain-outline"
            }`}
          >
            <input
              type="text"
              className="form-input"
              id="first-name"
              placeholder="enter first name"
              min="3"
              max="15"
              aria-label="first name"
              autoComplete="first name"
              value={signUpData.firstName}
              required
              onChange={(event) =>
                setSignUpData((prev) => ({
                  ...prev,
                  firstName: event.target.value,
                }))
              }
            />
            <label htmlFor="first-name">
              <small>First Name</small>
            </label>
          </div>

          <div
            className={`form-item ${
              signUpData.lastName
                ? "status-success-outline"
                : "status-plain-outline"
            }`}
          >
            <input
              type="text"
              className="form-input"
              id="last-name"
              placeholder="enter last name"
              min="3"
              max="15"
              aria-label="last name"
              autoComplete="last name"
              value={signUpData.lastName}
              onChange={(event) =>
                setSignUpData((prev) => ({
                  ...prev,
                  lastName: event.target.value,
                }))
              }
            />
            <label htmlFor="last-name">
              <small>Last Name</small>
            </label>
          </div>

          <div
            className={`form-item ${
              signUpData.email
                ? emailValidation()
                  ? "status-success-outline"
                  : "status-error-outline"
                : "status-plain-outline"
            }`}
          >
            <input
              type="email"
              className="form-input"
              placeholder="email address"
              aria-label="email"
              id="email"
              autoComplete="email"
              value={signUpData.email}
              required
              onChange={(event) =>
                setSignUpData((prev) => ({
                  ...prev,
                  email: event.target.value,
                }))
              }
            />
            <label htmlFor="email">
              <small>email</small>
            </label>
          </div>

          <div
            className={`form-item ${
              signUpData.password
                ? passwordValidation()
                  ? "status-success-outline"
                  : "status-error-outline"
                : "status-plain-outline"
            }`}
          >
            <input
              type="password"
              autoComplete="new-password"
              id="password"
              className="form-input password"
              placeholder="enter-password"
              aria-label="password"
              value={signUpData.password}
              required
              onChange={(event) =>
                setSignUpData((prev) => ({
                  ...prev,
                  password: event.target.value,
                }))
              }
            />
            <label htmlFor="password">
              <small> Password</small>
            </label>
          </div>

          <div
            className={`form-item ${
              signUpData.confirmPassword
                ? signUpData.password === signUpData.confirmPassword
                  ? "status-success-outline"
                  : "status-error-outline"
                : "status-plain-outline"
            }`}
          >
            <input
              type="password"
              autoComplete="new-password"
              id="confirm-password"
              className="form-input password"
              placeholder="confirm-password"
              aria-label="confirm password"
              value={signUpData.confirmPassword}
              required
              onChange={(event) =>
                setSignUpData((prev) => ({
                  ...prev,
                  confirmPassword: event.target.value,
                }))
              }
            />
            <label htmlFor="confirm-password">
              <small>Confirm Password</small>
            </label>
          </div>

          <p className="form-item checkbox-wrapper">
            <input
              type="checkbox"
              id="terms"
              checked={acceptTerms}
              onChange={() =>
                setSignUpData((prev) => ({
                  ...prev,
                  acceptTerms: !prev.acceptTerms,
                }))
              }
            />
            <label htmlFor="terms" className="label form-label checkbox-label">
              I accept all terms and conditions
            </label>
          </p>
          <button
            type="submit"
            className="btn bg-accent"
            onClick={signUpHandler}
          >
            signup
          </button>
          <Link to="/login" className="form-item">
            Already have an account &gt;
          </Link>
        </form>
      </div>
    </>
  );
};
