import React from "react";
import Navbar from "../../components/navbar/navbar";
import "./header.css";

function Header(props) {
  return (
    <div className="Header">
      <Navbar />
      <h1>{props.name}</h1>
      <button>Get a quote</button>
    </div>
  );
}

export default Header;
