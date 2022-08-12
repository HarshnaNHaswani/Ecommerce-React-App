import React from "react";
import { Link } from "react-router-dom";
import logo from "../../logo.png";

export function Logo() {
  return (
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
  );
}
