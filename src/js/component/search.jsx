import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/search.css";

export const Search = () => {
  const { store, actions } = useContext(Context);

  const [input, setInput] = useState("");
  const [filter, setFilter] = useState([]);

  const handleInput = (e) => {
    setInput(e.target.value);
    const value = e.target.value.toLowerCase();
    let filter = [];

    for (const array in store) {
      if (array !== "favourites") {
        const aux = store[array].filter(
          (item) => item.name.toLowerCase().includes(value) && value !== ""
        );
        filter = [...filter, ...aux];
      }
    }
    setFilter(filter);
  };

  return (
    <div className="search col-6 col-md-4  ">
      <div>
        <input
          onChange={handleInput}
          value={input}
          type="text"
          placeholder="Search"
        />

        {filter.length > 0 ? (
          <div className="search-list">
            <ul>
              {filter.map((li, index) => (
                <Link
                  onClick={() => {
                    setInput("");
                    setFilter([]);
                  }}
                  to={`/${li.type}/${li.uid}`}
                  key={index}
                >
                  <li>{li.name}</li>
                </Link>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  );
};
