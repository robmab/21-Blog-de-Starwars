import React, { useContext, useState, useEffect, useRef } from "react";
import { Context } from "../store/appContext";

import { Link } from "react-router-dom";

import "../../styles/navbar.css";
import sfLogo from "../../img/sw.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const [fav, setFav] = useState(store.favourites);

  const [hover, setHover] = useState(false);

  /*  CHECK EVERY 0.25 SEC STORE.FAVOURITES DATA,
  WHEN DATA FROM LOCALSTORAGE IS LOADED, 
  BREAK LOOP AND SET DATA */
  useEffect(() => {
    if (fav.length === 0) {
      const int = setInterval(() => {
        if (store.favourites.length > 0) {
          setFav(store.favourites);

          clearInterval(int);
        }
      }, 250);
    }
  }, []);

  /* CAPTURE WIDTH AND HEIGHT WHEN ZOOM IN/OUT */
  const [dimensions, setDimensions] = useState({
    height: window.innerWidth,
    width: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    };
    window.addEventListener("resize", handleResize);
  }, []);

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
              <p>{fav.length}</p>
            </div>
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            {fav.length === 0 ? (
              <p>Empty list</p>
            ) : (
              fav.map((x, y) => (
                <li
                  onMouseEnter={() => {
                    setHover(y);
                  }}
                  onMouseLeave={() => {
                    setHover(false);
                  }}
                  key={y}
                >
                  <Link className="" to={`/${x.type}/${x.keyStore}`}>
                    {x.name}
                  </Link>
                  {hover === y || dimensions.width < 900 ? (
                    <FontAwesomeIcon icon={faTrash} />
                  ) : null}
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};
