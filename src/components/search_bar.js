import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: "" };
  }

  render() {
    return (
      <form onSubmit={onSumitPrevent}>
        <div className="search-bar">
          <input
            value={this.state.term}
            placeholder="Start SEARCHING VIDEOS here 🎦"
            onChange={(event) => this.onInputChange(event.target.value)}
          />
        </div>
      </form>
    );
  }

  onSumitPrevent(e) {
    e.prventDefault();
  }

  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
