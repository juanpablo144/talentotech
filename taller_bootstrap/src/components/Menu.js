import React from "react";
import { NavLink } from "react-router-dom";

function Menu() {
  return (
    <nav>
      <NavLink
        className={({ isActive }) => (isActive ? "activo" : null)}
        to="/"
      >
        Home
      </NavLink>
    </nav>
  );
}

export { Menu };
