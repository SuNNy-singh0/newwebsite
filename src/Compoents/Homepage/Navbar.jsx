import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar-wrapper">
      <div className="navbar-left">
     
        <span className="navbar-link">Explore</span>
      </div>

      <div className="navbar-center">
        <h1 className="navbar-title">Townmanor</h1>
      </div>

      <div className="navbar-right">
        <span className="navbar-link">Know more ▼</span>
      </div>
    </nav>
  );
};

export default Navbar;
