import React, { useEffect, useState, useContext } from "react";

import { Context } from "../store/appContext";

import "../../styles/home.css";

import { Card } from "../component/card.jsx";

export const Home = () => {
  const { store } = useContext(Context);

  return (
    <div className="home-wrapper">
      <h1>Characters</h1>
      <div className="card-wrapper">
        {store.people !== undefined
          ? store.people.map((x, y) => (
              <Card
                type="characters"
                key={x.uid}
                id={x.uid}
                keyStore={y}
                name={x.name}
              />
            ))
          : null}
      </div>
      <h1>Vehicles</h1>
      <div className="card-wrapper">
        {store.vehicles !== undefined
          ? store.vehicles.map((x, y) => (
              <Card
                type="vehicles"
                key={x.uid}
                id={x.uid}
                keyStore={y}
                name={x.name}
              />
            ))
          : null}
      </div>
      <h1>Planets</h1>
      <div className="card-wrapper">
        {store.planets !== undefined
          ? store.planets.map((x, y) => (
              <Card
                type="planets"
                key={x.uid}
                id={x.uid}
                keyStore={y}
                name={x.name}
              />
            ))
          : null}
      </div>
    </div>
  );
};
