import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/description.css";
import { Description } from "../component/description.jsx";

export const Vehicles = (props) => {
  const { store, actions } = useContext(Context);
  const id = useParams().theid;

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
    actions.loadData(id, "vehicles", setValues);
  }, [store.vehicles]);

  return (
    <>
      {store.vehicles.length > 0 ? (
        <Description
          name={store.vehicles[id].name}
          uid={store.vehicles[id].uid}
          type="vehicles"
          one={values.subName}
          two={values.model}
          three={values.length}
          four={values.maxAtmospheringSpeed}
          five={values.costInCredits}
          six={values.cargoCapacity}
        />
      ) : null}
    </>
  );
};
