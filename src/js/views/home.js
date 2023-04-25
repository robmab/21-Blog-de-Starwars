import React from "react";

import "../../styles/home.css";

import { Card } from "../component/card.jsx";

export const Home = () => (
  <div className="home-wrapper">
    <h1>Characters</h1>
    <div className="card-wrapper">
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
    <h1>Vehicles</h1>
    <div className="card-wrapper">
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
    <h1>Planets</h1>
    <div className="card-wrapper">
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  </div>
);
