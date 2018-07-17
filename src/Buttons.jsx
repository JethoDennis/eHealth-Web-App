import React from 'react'
import ReactDOM from 'react-dom'
import './App.css'

function Buttons (props) {
  console.log('render', props)
  return (
    <div>
    <p> Count: {props.count}</p>
    <button class="btn btn-default" onClick={props.onMedlyClick}> Medly </button>
    <button onClick={props.onNedClick}> Ned </button>

  )
}



export default Buttons
