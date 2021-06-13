import React from "react";
import "../css/Navbar.css";

import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/" className="nav__logo">
        <img src={Logo} alt="logo" />
      </Link>
      <ul className="nav__links">
        <Link to="/map" className="nav__items">
          <li>MAP</li>
        </Link>
        <Link to="/console" className="nav__items">
          <li>CONSOLE</li>
        </Link>
        <Link to="/config" className="nav__items">
          <li>CONFIGURATION</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
