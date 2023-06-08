import React, { useState, useContext, useEffect } from "react";
import { Link, useLocation, useParams, useNavigate } from "react-router-dom";

import { Context } from "../store/appContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

import "../../styles/formulary.css";

export const Profile = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token === null) navigate("/login");

    const priv = async () => {
      const profile = await actions.private();
      if (!profile) {
        actions.logout()
        navigate("/")};
      setLoad(true);
    };
    priv();
  }, []);

  return (
    <div>
      {load && store.user.user_name !== undefined && (
        <>
          <p>{store.user.user_name}</p>
          <p>{store.user.first_name}</p>
          <p>{store.user.last_name}</p>
          <p>{store.user.email}</p>
        </>
      )}
    </div>
  );
};
