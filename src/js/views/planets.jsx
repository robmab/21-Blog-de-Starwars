import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/description.css";
import { Description } from "../component/description.jsx";

export const Planets = (props) => {
  const { store, actions } = useContext(Context);
  const id = useParams().theid;

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
    actions.loadData(id, "planets", setValues);
  }, [store.planets]);

  return (
    <>
      {store.planets.length > 0 ? (
        <Description
          name={store.planets[id].name}
          uid={store.planets[id].uid}
          type="planets"
          one={values.subName}
          two={values.climate}
          three={values.population}
          four={values.orbitalPeriod}
          five={values.rotationPeriod}
          six={values.diameter}
        />
      ) : null}
    </>
  );
};
