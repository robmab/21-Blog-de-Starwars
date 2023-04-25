import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import "../../styles/card.css";

export const Card = () => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src="https://camo.githubusercontent.com/908353dc3ced1a991b7ab6c188819379f2aa8024bd960117250bb6f0146e76e9/68747470733a2f2f7669612e706c616365686f6c6465722e636f6d2f343030783230302e706e67"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <div>
          <a href="#" className="btn btn-outline-primary">
            Learn more!
          </a>
          <a href="#" className="btn btn-outline-warning">
            <FontAwesomeIcon icon={faHeart} />
          </a>
        </div>
      </div>
    </div>
  );
};
