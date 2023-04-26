import React from "react";
import { Link } from "react-router-dom";

import "../../styles/navbar.css";

import sfLogo from "../../img/sw.png";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="">
        <Link to="/">
          <img width="80px" src={sfLogo} alt="" />
        </Link>

        <div className="dropdown">
          <button
            className="btn btn-primary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Favorites
            <div>
              <p>1</p>
            </div>
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <a className="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
