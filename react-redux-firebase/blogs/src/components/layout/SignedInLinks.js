import React from "react";
import { NavLink } from "react-router-dom";

export default function SignedInLinks() {
  return (
    <ul className="right">
      <li>
        <NavLink to="/postblog">New Blog</NavLink>
      </li>
      <li>
        <NavLink to="/">Logout</NavLink>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating pink lighten-1">
          GG
        </NavLink>
      </li>
    </ul>
  );
}
