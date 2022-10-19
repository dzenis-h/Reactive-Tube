import React, { useState, Fragment } from "react";

import Toggle from "../darkMode/ToggleContainer";
import { useTheme } from "../darkMode/useTheme";

import "../css/search.css";
import Icon from "../assets/brand.png";

const SearchBar = (props) => {
  const [term, setTerm] = useState("");
  const themeState = useTheme();
  const darkMode = localStorage.getItem("dark");

  const onSubmit = (e) => {
    setTerm(e.target.value);
    if (e.key === "Enter") {
      props.onSearchTermChange(term);
    }
  };

  return (
    <Fragment>
      <div className="brand">
        <img
          aria-label="Reactive Tube"
          alt="Brand"
          className="brand-logo"
          src={Icon}
        />
        <h2
          className={darkMode === "true" ? "brand-text__reverse" : "brand-text"}
        >
          Reactive tube
        </h2>
        <Toggle toggleTheme={themeState} theme={themeState.dark}></Toggle>
      </div>

      return (
    <>
      <form className="form" onSubmit={onSubmit}>
        <label className="label" htmlFor="query">
          <h2 className="brand">Image search</h2>
          <button className="button-24 center" onKeyDown={searchPhotos}>
            Submit
          </button>
          <div className="container">
            <input
              type="text"
              name="query"
              className="input"
              placeholder={"Try cars 🤷‍♂️"}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <div className="search"></div>
          </div>
        </label>
        <input />
        <div className="card-list">
          {pics &&
            pics.map((pic) => (
              <div key={pic.id} id="gallery" className="gridStyle px-4">
                <img
                  className="card--image"
                  alt={pic.alt_description}
                  src={pic.urls.full}
                  width="50%"
                  height="50%"
                ></img>
              </div>
            ))}
        </div>
      </form>
    </>
    </Fragment>
  );
};

export default SearchBar;
