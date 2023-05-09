import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

import "../../styles/description.css";

export const Planets = (props) => {
  const { store, actions } = useContext(Context);
  const param = useParams().theid;

  const [name,setName]= useState("")

  const [values, setValues] = useState({
    subName: "",
    climate: "",
    population: "",
    orbitalPeriod: "",
    rotationPeriod: "",
    diameter: "",
  });

  useEffect(() => {
    //Check when store is not empty
    if (Object.keys(store).length === 0) {
      const interval = setInterval(() => {
        if (store.planets !== undefined) {
          setName(store.planets[param].name);
          actions.loadData(param, "planets", setValues);

          clearInterval(interval);
        }
      }, 250);
    } else {
      setName(store.planets[param].name);
      actions.loadData(param, "planets", setValues);
    }
  }, []);
  return (
    <div className="container-fluid characters-wrapper ">
      <div className="row characters-wrapper-top ">
        <div className="col-12 col-md-6 m-0 p-0 characters-img ">
          <img
            width="560px"
            src="https://www.solidscape.com/wp-content/uploads/2021/10/800x600.png"
            alt=""
          />
        </div>

        <div className="col-12 col-md-6 m-0  characters-main ">
          <h1>{name}</h1>
          <p>
            Quisque gravida, odio in elementum dictum, nisi erat mattis libero,
            in lacinia augue metus in tellus. Etiam sed semper diam, a egestas
            lorem. Mauris non sapien bibendum, gravida nunc vel, ultricies odio.
            Aenean interdum hendrerit lorem, non auctor sapien semper et. Donec
            faucibus varius magna, a pellentesque augue fringilla sit amet.
            Proin vitae cursus tortor, id vehicula sem. Donec ultricies lacus id
            scelerisque pulvinainterdum hendrerit loremr. Proin sed massa
            ultricies, rhoncus urna id, ultricies odio.hendrerit loremr
          </p>
        </div>
      </div>
      <div className="row characters-wrapper-bottom">
        <div className="col-12 col-md-6 table-left">
          <table>
            <thead>
              <tr>
              <th>Name</th>
                <th>Climate</th>
                <th>Population</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{values.subName}</td>
                <td>{values.climate}</td>
                <td>{values.population}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-12 col-md-6 table-rigth">
          <table>
            <thead>
              <tr>
                <th>Orbital Period</th>
                <th>Rotation Period</th>
                <th>Diameter</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{values.orbitalPeriod}</td>
                <td>{values.rotationPeriod}</td>
                <td>{values.diameter}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
