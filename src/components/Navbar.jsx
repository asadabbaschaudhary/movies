import React from "react";
import { Link } from "react-router-dom";
import SearchInput from "./SearchInput";
function Navbar() {
  return (
    <div class="navbr  ">
      <nav class="navbar navbar-expand-lg navbar-dark navcolor navbr ">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <Link class="navbar-brand" to="/" style={{ border: "white" }}>
            IMDb
          </Link>
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item">
              <Link class="nav-link" to="/">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/movies">
                Movies
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link " to="/tvshows">
                TV Shows
              </Link>
            </li>
          </ul>
        </div>
        <SearchInput />
        <div>
          <Link to="/login" class="btn btn-outline-dark btns">
            Login
          </Link>
          <Link to="/dashboard" class="btn btn-outline-dark btns">
            Dashboard
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
