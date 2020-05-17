import React, { Component } from "react";
import "../css/search.css";

class SearchBar extends Component {
  state = { term: "" };

  render() {
    return (
      <div className="container">
        {/* <h2>Reactive Tube</h2> */}
        <input
          type="text"
          placeholder="Search..."
          value={this.state.term}
          onChange={(e) => this.onInputChange(e.target.value)}
        />
        <div className="search"></div>
      </div>
    );
  }

  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
