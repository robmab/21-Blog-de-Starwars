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
    const filter = [];

    for (const array in store) {
      if (array !== "favourites") {
        store[array].forEach((object, index) => {
          const name = object.name.toLowerCase();
          if (name.includes(value) && value !== "")
            filter.push({
              name: name.charAt(0).toUpperCase() + name.slice(1),
              uid: index,
              type: array === "people" ? "characters" : array,
            });
        });
      }

      setFilter(filter);
    }
  };

  return (
    <div className="search col-8 col-md-4  ">
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
