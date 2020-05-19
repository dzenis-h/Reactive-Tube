import React, { useState, Fragment } from "react";
import "../css/search.css";

const SearchBar = (props) => {
  const [term, setTerm] = useState("");

  const onSubmit = (e) => {
    setTerm(e.target.value);
    if (e.key === "Enter") {
      props.onSearchTermChange(term);
    }
  };

  return (
    <Fragment>
      <h2 className="brand">Reactive tube</h2>
      <div className="container">
        <input
          type="text"
          placeholder="Type & hit Enter"
          value={term}
          onKeyDown={(term) => onSubmit(term)}
          onChange={onSubmit}
        />
        <div className="search"></div>
      </div>
    </Fragment>
  );
};

export default SearchBar;
