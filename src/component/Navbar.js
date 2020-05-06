import React, { Component } from "react";
import ReactDOM from "react-dom";
import {Link, NavLink} from "react-router-dom";




const Navbar = () => {
  return (
    <nav className="">
      <div className="container">
        <a className="brand-logo"> HELLO! Welcome to my ReactApp! </a>
        <ul className="right">
          <li><Link to="/"> Home </Link></li>
          <li> <Link to="/register"> Register </Link></li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
