import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import store from './store/Try'
import Splash from './Splash'
import { connect } from 'react-redux';

class Director extends Component {

  render() {
   return (
     <span className="Apps">
     <Splash store={store}/>
     </span>
)
  }
  }

export default Director
