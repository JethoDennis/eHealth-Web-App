import React from "react";
import Header from "./Basic_Header";
import Logo from "./Logo";
import "./App.css";
import SearchBar from "./Search";
import rotating from "./Rotate.png";
import logo from "./UHN.png";
import AppsCarousel from "./AppsCarousel";
import NavBar from "./NavBar";
import { connect } from "react-redux";

function Splash(props) {
  console.log("render", props);

  return (
    <span className="Apps">
      <header className="App-header">
        <Logo />
        <Header />
        <AppsCarousel />
        <h2>
          <img src={rotating} className="App-rotating" alt="fireSpot" />
          <img src={logo} className="App-logo" alt="fireSpot" />
        </h2>
      </header>
    </span>
  );
}


export default Splash
