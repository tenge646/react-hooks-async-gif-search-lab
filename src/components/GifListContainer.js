import React, { Component } from "react";
import GifSearch from "./GifSearch";
import GifList from "./GifList"; 

class GifListContainer extends Component {
  constructor() {
    super();
    this.state = {
      gifs: [],
    };
  }

  componentDidMount() {

    this.fetchGifs("dolphin"); 
  }

  fetchGifs = (query) => {
   
    const apiKey = "6oRwveX5YumoNs76ZQGryLWxK9mtrkw1";
    const apiUrl = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${apiKey}&rating=g`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ gifs: data.data.slice(0, 3) }); 
      });
  };

  render() {
    return (
      <div>
        
        <GifSearch onSubmit={this.fetchGifs} />
        
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}

export default GifListContainer;

