import React from "react";
import NavBar from "./NavBar";
import GifListContainer from "./GifListContainer";

function App() {
  const appStyle = {
    backgroundColor: "white", 
    color: "black", 
    padding: "20px",
  };

  const headingStyle = {
    background: "black", 
    color: "white", 
    padding: "10px", 
  };

  return (
    <div style={appStyle}>
      <h1 style={headingStyle}>Giphy Search</h1>
      <NavBar />
      <GifListContainer />
    </div>
  );
}

export default App;

