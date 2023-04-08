import React from "react";
import { Link } from "react-router-dom";

import "./NavBar.css";
const NavBar = () => {
  return (
    <div className="main-header">
      <ul class="nav justify-content-center">
        <li class="nav-item">
         <Link to="/"> <img
            class="Awpj3x"
            src="https://m.media-amazon.com/images/G/01/digital/video/web/Logo-min.png"
            alt="Prime Video"
          ></img> </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link nav-link-changes" to="/">
            Home
          </Link>
        
        </li>
        <li class="nav-item">
          <Link class="nav-link nav-link-changes" to="/store">
            Store
          </Link>
         
        </li>
        <li class="nav-item">
          <Link class="nav-link nav-link-changes" to="/Categories">
          Categories
          </Link>
         
        </li>
      </ul>
      <Link to ="/store">
      <button type="button" class="btn btn-primary">Sign In</button>
      </Link>
     
    </div>
  );
};

export default NavBar;
