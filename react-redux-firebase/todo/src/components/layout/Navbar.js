import React from "react";
import { Link } from "react-router-dom";
import NavItems from "./NavItems";

export default function Navbar() {
  return (
    <nav className="navbar navbar-light bg-light d-flex justify-content-center">
      <Link to="/" className="navbar-brand">
        <h3>GURI</h3>
      </Link>
      <NavItems></NavItems>
    </nav>
  );
}
