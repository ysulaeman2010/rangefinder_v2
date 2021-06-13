import React from "react";
import LogoFull from "../assets/logo_full.png";
import { Link } from "react-router-dom";

import "../css/Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="home__right">
        <img src={LogoFull} alt="logo" />
      </div>
      <div className="home__center"></div>
      <div className="home__left">
        <div className="left__content">
          <h1>MILITARY FORCE</h1>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </p>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </p>
          <Link to="/map">
            <button className="left__content_button">Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
