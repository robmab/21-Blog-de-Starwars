import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/description.css";
import { Description } from "../component/description.jsx";

export const Characters = () => {
  const { store, actions } = useContext(Context);
  const id = useParams().theid;

  const [values, setValues] = useState({
    subName: "",
    birthYear: "",
    gender: "",
    height: "",
    skinColor: "",
    eyeColor: "",
  });

  useEffect(() => {
    //Check when store is not empty
    actions.loadData(id, "people", setValues);
  }, [store.people]);

  return (
    <>
      {store.people.length > 0 ? (
        <Description
          name={store.people[id].name}
          uid={store.people[id].uid}
          type="characters"
          one={values.subName}
          two={values.birthYear}
          three={values.gender}
          four={values.height}
          five={values.skinColor}
          six={values.eyeColor}
        />
      ) : null}
    </>
  );
};
