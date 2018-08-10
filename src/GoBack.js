import React from "react";
import ReactDOM from "react-dom";
import { Button, Icon } from "semantic-ui-react";
import { connect } from "react-redux";
import store from "./store/Reducer";
import MedlyPage from "./MedlyPage";
import Director from "./Director";
import Splash from "./Splash";

class GoBack extends React.Component {
  render() {
    let component;
    if (this.props.back === "back") {
      component = <Splash />;
    } else {
      component = { component };
    }
    return <span className="App">{component}</span>;
  }
}

function mapStateToProps(state) {
  console.log("mapStateToProps", state);
  return {
    back: state.back
  };
}

export default connect(mapStateToProps)(GoBack);
