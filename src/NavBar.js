import React from "react";
import { connect } from "react-redux";
import "./NavBar.css";
import DrawerToggleButton from "./DrawerToggleButton";
import Splash from "./Splash";

function NavBar(props) {
  return (
    <header className="toolbar">
      <nav className="toolbar_navigation">
        <div className="toolbar_logo">
          {" "}
          <a> eHealth Innovations </a>
        </div>
        <div className="spacer" />
        <div className="toolbar_navigation_logo">
          <ul>
            <li>
              {" "}
              <a href="/" onClick={props.onHomeClick}>
                Home
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

function mapStatetoProps(state) {
  console.log("mapStatetoProps", state);
  return {
    page: state.page
  };
}

function mapDispatchtoProps(dispatch) {
  return {
    onHomeClick: () => {
      console.log("Clicked");
      const action = { type: "HOME" };
      dispatch(action);
    }
  };
}
export default connect(
  mapStatetoProps,
  mapDispatchtoProps
)(NavBar);
