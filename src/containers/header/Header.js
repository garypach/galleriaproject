import React from "react";
import logo from '../../shared/logo.svg'
import './header.css'
const Header = (props) => {


  return (
      <div className="header-container">
          <div className="header-logo">
            <img src={logo} alt="logo"/>
          </div>

      </div>
  );
};
export default Header