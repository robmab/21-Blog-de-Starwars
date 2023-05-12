import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

import "../../styles/description.css";
import { Description } from "../component/description.jsx";

export const Vehicles = (props) => {
  const { store, actions } = useContext(Context);
  const param = useParams().theid;

  const [name, setName] = useState("");
  const [uid, setUid] = useState("");

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
          setUid(store.vehicles[param].uid);
          actions.loadData(param, "vehicles", setValues);

          clearInterval(interval);
        }
      }, 250);
    } else {
      setName(store.vehicles[param].name);
      setUid(store.vehicles[param].uid);
      actions.loadData(param, "vehicles", setValues);
    }
  }, []);

  return (
    <Description
      name={name}
      uid={uid}
      type="vehicles"
      one={values.subName}
      two={values.model}
      three={values.length}
      four={values.maxAtmospheringSpeed}
      five={values.costInCredits}
      six={values.cargoCapacity}
    />
  );
};
