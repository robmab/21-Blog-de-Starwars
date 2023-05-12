import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

import "../../styles/description.css";
import { Description } from "../component/description.jsx";

export const Characters = () => {
  const { store, actions } = useContext(Context);
  const param = useParams().theid;

  const [name, setName] = useState("");
  const [uid, setUid] = useState("");

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
    if (Object.keys(store).length === 1) {
      const interval = setInterval(() => {
        if (store.people !== undefined) {
          setName(store.people[param].name);
          setUid(store.people[param].uid);
          actions.loadData(param, "people", setValues);

          clearInterval(interval);
        }
      }, 250);
    } else {
      setName(store.people[param].name);
      setUid(store.people[param].uid);
      actions.loadData(param, "people", setValues);
    }
  }, []);

  return (
    <Description
      name={name}
      uid={uid}
      type="characters"
      one={values.subName}
      two={values.birthYear}
      three={values.gender}
      four={values.height}
      five={values.skinColor}
      six={values.eyeColor}
    />
  );
};
