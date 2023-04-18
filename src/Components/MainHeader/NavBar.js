import React from "react";
import { Link } from "react-router-dom";

import "./NavBar.css";
const NavBar = (props) => {
  return (
    <div className="main-header">
      <ul class="nav justify-content-center">
        <li class="nav-item">
          <Link to="/">
            {" "}
            <img
              class="Awpj3x"
              src="https://m.media-amazon.com/images/G/01/digital/video/web/Logo-min.png"
              alt="Prime Video"
            ></img>{" "}
          </Link>
        </li>

        <li class="nav-item">
          <Link class="nav-link nav-link-changes" to="/">
            Home
          </Link>
        </li>
        {/* <li class="nav-item">
          <Link class="nav-link nav-link-changes" to="/store">
            Store
          </Link>
        </li> */}
        <li class="nav-item">
          <Link class="nav-link nav-link-changes" to="/categories">
            Categories
          </Link>
        </li>
        {props.isLoggedIn && (
          <li class="nav-item">
            <Link class="nav-link nav-link-changes" to="/watchlist">
              WatchList
            </Link>
          </li>
        )}
      </ul>
      {!props.isLoggedIn && (
        <Link to="/login">
          <button type="button" class="btn btn-primary">
            Sign In
          </button>
        </Link>
      )}
            {props.isLoggedIn && (
        <Link to="/">
          <button type="button" class="btn btn-primary" onClick={props.onLogout}> 
            Log out
          </button>
        </Link>
      )}
    </div>
  );
};

export default NavBar;
