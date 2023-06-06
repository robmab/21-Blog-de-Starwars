import React, { useState, useContext, useEffect } from "react";
import { Link, useLocation, useParams, useNavigate } from "react-router-dom";

import { Context } from "../store/appContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

import "../../styles/formulary.css";

export const Profile = () => {
  const navigate = useNavigate();
  const { store, actions } = useContext(Context);

  const [alert, setAlert] = useState(false);
  const [alertText, setAlertText] = useState("An error has occurred.");

  /* INPUT CHECKS */
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  /* FORMULARY */
  const handleFormulary = async (e) => {
    e.preventDefault();

    const contactData = {
      email: email,
      password: password,
    };
    
    const login = await actions.login(contactData);
    if (login) navigate("/");
    setPassword(""); 
    setAlert(true)
    setAlertText("Incorrect username/email or password")

  };

  return (
    <div className="wrapper-formulary">
      <div className="form">
        {/* ALERT */}
        {alert ? (
          <div
            className="alert alert-danger d-flex align-items-center"
            role="alert"
          >
            <FontAwesomeIcon
              icon={faTriangleExclamation}
              style={{ color: "#fa0000" }}
            />
            <div>{alertText}</div>
          </div>
        ) : null}

        {/* ALERT END*/}
        <form onSubmit={handleFormulary}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email/Username</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="text"
              className="form-control"
              id="password"
              aria-describedby="emailHelp"
              
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)} 
              value={password}
              type="password"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              
            />
          </div>

          <button
            type="submit"
            className={`btn btn-primary ${
              (!email || !password) && "noclick" 
            }`}
          >
            Login
          </button>
        </form>
      </div>
      <Link to="/">Back to Home</Link>
    </div>
  );
};
