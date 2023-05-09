import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

import "../../styles/description.css";

export const Vehicles = (props) => {
  const { store, actions } = useContext(Context);
  const param = useParams().theid;

  const [name,setName]= useState("")

  const [values, setValues] = useState({
    subName: "",
    model: "",
    length: "",
    maxAtmospheringSpeed: "",
    costInCredits: "",
    cargoCapacity: "",
  });

  useEffect(() => {
    //Check when store is not empty
    if (Object.keys(store).length === 1) {
      const interval = setInterval(() => {
        if (store.vehicles !== undefined) {
          setName(store.vehicles[param].name);
          actions.loadData(param, "vehicles", setValues);

          clearInterval(interval);
        }
      }, 250);
    } else {
      setName(store.vehicles[param].name);
      actions.loadData(param, "vehicles", setValues);
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
                <th>Model</th>
                <th>Length</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{values.subName}</td>
                <td>{values.model}</td>
                <td>{values.length}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-12 col-md-6 table-rigth">
          <table>
            <thead>
              <tr>
                <th>Max Atmosphering Speed</th>
                <th>Cost In Credits</th>
                <th>Capacity</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{values.maxAtmospheringSpeed}</td>
                <td>{values.costInCredits}</td>
                <td>{values.cargoCapacity}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};


