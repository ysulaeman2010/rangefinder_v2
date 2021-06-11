import React from "react";
import "../css/Navbar.css";

import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

const Navbar = () => {
  const data = useSelector((state) => state.c_2);
  return (
    <React.Fragment>
      <nav>
        <strong>CPU Usage (%)</strong>
        {data.cpu_usage} <strong>Free Memory</strong>
        {data.memory}
      </nav>
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
    </React.Fragment>
  );
};

export default Navbar;
