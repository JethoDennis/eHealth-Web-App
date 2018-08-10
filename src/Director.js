import React from "react";
import NedPage from "./NedPage";
import Splash from "./Splash";
import MedlyPage from "./MedlyPage";
import BAPage from "./BAPage";
import BantPage from "./bantPage";
import ICCPage from "./ICCPage";
import Resources from './Resources'
import NavBar from "./NavBar"
import { connect } from "react-redux";

class Director extends React.Component {
  render() {
    console.log(this);
    let component; // undefined
    let portion;
    if (this.props.page === "Medly") {
      component = <MedlyPage />;
    } else if (this.props.page === "Ned") {
      component = <NedPage />;
    } else if (this.props.page === "bant") {
      component = <BantPage />;
    } else if (this.props.page === "Breathe-Again") {
      component = <BAPage />;
    } else if (this.props.page === "ICanCope") {
      component = <ICCPage />;
    } else if (this.props.page === "Splash") {
      component = <Splash />
    } else {
      component = <Splash />;
    }

    return <span className="App">{component}</span>;
  }
}

function mapStateToProps(state) {
  console.log("mapStateToProps", state);
  return {
    page: state.page
  };
}

export default connect(mapStateToProps)(Director);
