import React from "react"
import './DrawerToggleButton.css'

const DrawerToggleButton = props => (
  <button className="toggle-button">
    <div className="toggle-button_line"  onClick = {props.click} />
    <div className="toggle-button_line"  onClick = {props.click}/>
    <div className="toggle-button_line"  onClick = {props.click}/>
  </button>
);

export default DrawerToggleButton;
