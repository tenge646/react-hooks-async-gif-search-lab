import React, { Component } from "react";

class GifSearch extends Component {
  constructor() {
    super();
    this.state = {
      query: "",
    };
  }

  handleInputChange = (event) => {
    this.setState({ query: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.query);
  };

  render() {
    const searchContainerStyle = {
      position: "relative", 
    };

    const searchBarStyle = {
      position: "absolute",
      top: "10px",
      right: "10px",
      background: "green", 
      color: "white", 
      padding: "5px",
      borderRadius: "5px",
    };

    return (
      <div style={searchContainerStyle}>
        <form onSubmit={this.handleSubmit} style={searchBarStyle}>
          <input
            type="text"
            value={this.state.query}
            onChange={this.handleInputChange}
          />
          <button type="submit" style={{ backgroundColor: "transparent" }}>
            Search
          </button>
        </form>
      </div>
    );
  }
}

export default GifSearch;
