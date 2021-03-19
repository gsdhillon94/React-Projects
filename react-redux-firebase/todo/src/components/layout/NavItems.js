import React from "react";
import { Link } from "react-router-dom";

export default function NavItems() {
  return (
    <>
      <Link to="/signin" className="nav-link">
        logout
      </Link>
      <Link to="/signup" className="nav-link">
        Sign Up
      </Link>
      <Link to="/signin" className="nav-link">
        Sign In
      </Link>
    </>
  );
}
