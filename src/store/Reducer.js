import React from "react";
import { createStore } from "redux";

const initialState = {
  page: "",
  platform: "Android"
};

const reducer = (state = initialState, action) => {
  console.log("reducer running", action);

  switch (action.type) {
    case "MEDLY":
      return Object.assign({}, state, { page: "Medly" });
    case "NED":
      return Object.assign({}, state, { page: "Ned" });
    case "BANT":
      return Object.assign({}, state, { page: "bant" });
    case "BREATHEAGAIN":
      return Object.assign({}, state, { page: "Breathe-Again" });
    case "ICANCOPE":
      return Object.assign({}, state, { page: "ICanCope" });
    case "BACK":
      return Object.assign({}, state, { page: "Splash" });
    case "TOGGLE_PLATFORM":
      let current_state = state.platform;

      if (current_state === "Android") {
        current_state = "IOS";
      } else if (current_state === "IOS") {
        current_state = "Android";
      }
      return Object.assign({}, state, { platform: current_state });
    case "HOME":
      return Object.assign({}, state, { page: "Splash" });
    default:
      return state;
  }
};

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
