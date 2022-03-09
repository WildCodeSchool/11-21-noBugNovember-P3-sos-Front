import React from "react";
import logo from "../assets/logoW.png";
import "./Styles/Adminsidebar.css";
import { Link } from "react-router-dom";

function Adminsidebar() {
  return (
    <div>
      <div className="side-bar">
        <Link to="/">
          <img className="logo-panel" src={logo} alt="logo panel" />
        </Link>
        <div className="bloc-link-side-bar">
          <Link to="articles">Les articles</Link>
          <Link to="categories">Les catégories</Link>
          <Link to="">Les sous-catégories</Link>
          <Link to="">Les villes</Link>
        </div>
      </div>
    </div>
  );
}

export default Adminsidebar;
