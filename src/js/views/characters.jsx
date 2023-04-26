import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/description.css";

export const Characters = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  return (
    <div className="container-fluid characters-wrapper ">
      <div className="row characters-wrapper-top ">
        <div className="col-12 col-md-6 m-0 p-0 characters-img ">
          <img
            width="550px"
            src="https://www.solidscape.com/wp-content/uploads/2021/10/800x600.png"
            alt=""
          />
        </div>

        <div className="col-12 col-md-6 m-0  characters-main ">
          <h1>Luke Skywalker</h1>
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
            <tr>
              <th>Name</th>
              <th>Birth year</th>
              <th>Gender</th>
            </tr>
            <tr>
              <td>adios</td>
              <td>adios</td>
              <td>adios</td>
            </tr>
          </table>
        </div>
        <div className="col-12 col-md-6 table-rigth">
          <table>
            <tr>
              <th>Name</th>
              <th>Birth year</th>
              <th>Gender</th>
            </tr>
            <tr>
              <td>adios</td>
              <td>adios</td>
              <td>adios</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

Characters.propTypes = {
  match: PropTypes.object,
};
