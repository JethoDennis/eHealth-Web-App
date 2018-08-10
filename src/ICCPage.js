import React from "react";
import logo from "./ICC.JPG";
import Toggle from "./Toggle";
import SearchBar from "./Search";
import { connect } from "react-redux";

function ICCPage(props) {
  return (
    <span className="Apps">
      {/* <button onClick={props.onBackClick}> Go Back </button> */}
      <header className="App-header">
        <img src={logo} className="App-ICC" alt="fireSpot" />
        {/*}  <SearchBar />
        <button className = 'btn btn-platform' onClick= {props.onPlatformClick}> {props.platform} </button>*/}
        <h2 className="App-slide">
          <button
            className="btn btn-default"
            onClick={props.onEnterPortalClick}
          >
            🤜 Enter Portal 🤛
          </button>
        </h2>
      </header>
    </span>
  );
}

function mapStateToProps(state) {
  console.log("mapStateToProps", state);
  return {
    page: state.page,
    platform: state.platform
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onBackClick: () => {
      console.log("clickin");
      const action = { type: "BACK" };
      dispatch(action);
    },
    onEnterPortalClick: () => {
      console.log("clickin");
      window.open("https://apps.ehealthinnovation.org/icc");
    },
    /*  onStagingClick: () => {
        console.log('clickin')
        window.open("https://apps.ehealthinnovation.org/icc/android/staging/")
     },
        onBranchClick: () => {
        console.log('clickin')
        const action = { type: 'BRANCH'}
        dispatch(action)
   },
        onDemosClick: () => {
        console.log('clickin')
        const action = { type: 'DEMOS'}
        dispatch(action)
 },*/

    onPlatformClick: () => {
      const action = { type: "TOGGLE_PLATFORM" };
      dispatch(action);
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ICCPage);
