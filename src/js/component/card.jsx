import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import "../../styles/card.css";

export const Card = (props) => {
 
  return (
    <div className="card">
      <img
        src="https://camo.githubusercontent.com/908353dc3ced1a991b7ab6c188819379f2aa8024bd960117250bb6f0146e76e9/68747470733a2f2f7669612e706c616365686f6c6465722e636f6d2f343030783230302e706e67"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>

        <p className="card-text"></p>
        <div>
          <Link
            to={`/${props.type}/${props.keyStore}`}
            className="btn btn-outline-primary"
          >
            Learn more!
          </Link>
          <a href="#" className="btn btn-outline-warning">
            <FontAwesomeIcon icon={faHeart} />
          </a>
        </div>
      </div>
    </div>
  );
};
