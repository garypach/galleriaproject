import React from "react";
import { Link } from "react-router-dom";
import './header.css'
const Header = (props) => {


  return (
      <div className="header-container">
        <Link to="/">
          <div className="header-logo">
            <img src='/../../../shared/logo.svg' alt="logo"/>
          </div>
    </Link>
      </div>
  );
};
export default Header