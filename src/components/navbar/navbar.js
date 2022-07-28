import React from "react";
import "./navbar.css";
function Navbar() {
  return (
    <div className="Navbar container">
      <div className="logo">
        <a href="!#">Versus</a>
      </div>
      <div className="pages">
        <a href="/src/pages/portfolio/portfolioPage.js">Portfolio</a>
        <a href="!#">About us</a>
        <a href="!#">Contact</a>
      </div>
    </div>
  );
}

export default Navbar;
