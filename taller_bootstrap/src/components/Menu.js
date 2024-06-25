import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";

function Menu() {
  return (
    <nav>
      <NavLink
        className={({ isActive }) => (isActive ? "activo" : null)}
        to="/"
      >
        <Button variant="primary">Home</Button>
      </NavLink>
    </nav>
  );
}

export { Menu };
