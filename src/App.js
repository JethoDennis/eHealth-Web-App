import React, { Component } from "react";
import Director from "./Director";
import NavBar from "./NavBar";
import SideDrawer from "./SideDrawerTools.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Director />
      </div>
    );
  }
}

export default App;
