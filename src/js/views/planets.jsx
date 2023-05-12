import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

import "../../styles/description.css";
import { Description } from "../component/description.jsx";

export const Planets = (props) => {
  const { store, actions } = useContext(Context);
  const param = useParams().theid;

  const [name, setName] = useState("");
  const [uid, setUid] = useState("");

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
    if (Object.keys(store).length === 1) {
      const interval = setInterval(() => {
        if (store.planets !== undefined) {
          setName(store.planets[param].name);
          setUid(store.planets[param].uid);
          actions.loadData(param, "planets", setValues);

          clearInterval(interval);
        }
      }, 250);
    } else {
      setName(store.planets[param].name);
      setUid(store.planets[param].uid);
      actions.loadData(param, "planets", setValues);
    }
  }, []);
  return (
    <Description
      name={name}
      uid={uid}
      type="planets"
      one={values.subName}
      two={values.climate}
      three={values.population}
      four={values.orbitalPeriod}
      five={values.rotationPeriod}
      six={values.diameter}
    />
  );
};
