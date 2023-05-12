import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import "../../styles/card.css";

export const Card = (props) => {
  const { store, actions } = useContext(Context);

  const [like, setLike] = useState(false);
  const [charged, setCharged] = useState(false); //Quit delay for change color
  const [focus, setFocus] = useState(false); //Box-shadow onFocus

  const addFavouritesHandle = () => {
    actions.addFavourites(props);
  };

  const deleteFavouritesHandle = () => {
    actions.deleteFavourites(props.name);
  };

  /* SET/UNSET FAVOURITES */
  useEffect(() => {
    setLike(false); //reset on every load
    store.favourites.forEach((x, y) => {
      if (props.name === x.name) {
        setLike(true);
      }
    });
    setCharged(true);
  }, [addFavouritesHandle, deleteFavouritesHandle]);

  /* HARGE SOME DATA FROM LOCALSTORAGE */
  const [data, setData] = useState("");
  useEffect(() => {
    if (localStorage.getItem(props.name) != null) {
      const properties = JSON.parse(localStorage.getItem(props.name));
      setData({
        gender: properties.properties.gender,
        hairColor: properties.properties.hair_color,
        eyeColor: properties.properties.eye_color,

        model: properties.properties.model,
        length: properties.properties.length,
        cost: properties.properties.cost_in_credits,

        population: properties.properties.population,
        terrain: properties.properties.terrain,
        diameter: properties.properties.diameter,
      });
    }
  }, []);
  return (
    <div className="card">
      <img src={props.url} className="card-img-top" alt="..." height="150em" />
      <div className="card-body">
        <h5
          className="card-title"
          style={
            props.name === "Storm IV Twin-Pod cloud car"
              ? { fontSize: "1.1em" }
              : null
          }
        >
          {props.name}
        </h5>

        {localStorage.getItem(props.name) !== null &&
        props.type === "characters" ? (
          <ul className="card-text">
            <li>Gender: {data.gender}</li>
            <li>Hair Color: {data.hairColor}</li>
            <li>Eye Color: {data.eyeColor}</li>
          </ul>
        ) : null}

        {localStorage.getItem(props.name) !== null &&
        props.type === "vehicles" ? (
          <ul className="card-text">
            <li>Model: {data.model}</li>
            <li>Length: {data.length}</li>
            <li>Cost: {data.cost}</li>
          </ul>
        ) : null}

        {localStorage.getItem(props.name) !== null &&
        props.type === "planets" ? (
          <ul className="card-text">
            <li>Population: {data.population}</li>
            <li>Terrain: {data.terrain}</li>
            <li>Diameter: {data.diameter}</li>
          </ul>
        ) : null}

        {localStorage.getItem(props.name) === null ? (
          <ul className="card-text">
            <li>-------------------------------</li>
            <li>Learn more for more details.</li>
            <li>-------------------------------</li>
          </ul>
        ) : null}

        <div>
          <Link
            to={`/${props.type}/${props.keyStore}`}
            className="btn btn-outline-primary"
          >
            Learn more!
          </Link>

          <a
            onClick={!like ? addFavouritesHandle : deleteFavouritesHandle}
            onFocus={() => {
              setFocus(true);
            }}
            onBlur={() => {
              setFocus(false);
            }}
            href="#"
            className="btn btn-outline-warning"
            style={
              !charged
                ? { display: "none" }
                : like && focus
                ? {
                    color: "red",
                    borderColor: "red",
                    backgroundColor: "rgb(254, 219, 219)",
                    boxShadow: "0 0 0.3em 0.2em red",
                  }
                : like
                ? {
                    color: "red",
                    borderColor: "red",
                    backgroundColor: "rgb(254, 219, 219)",
                  }
                : null
            }
          >
            <FontAwesomeIcon icon={faHeart} />
          </a>
        </div>
      </div>
    </div>
  );
};
