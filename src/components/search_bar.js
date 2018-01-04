import React from "react";
import { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ""
    };
  }

  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={evt => this.onInputChange(evt.target.value)}
        />
        <br />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }
}
export default SearchBar;
