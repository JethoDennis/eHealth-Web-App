import React from 'react'
import ReactDOM from 'react-dom'
import Header from './Basic_Header'
import Logo from './Logo'
import './App.css'
import Toggle from './Toggle'
import SearchBar from './Search'
import { connect } from 'react-redux';

function Splash (props) {
  console.log('render', props)
  return (
  <span className="Apps">
        <header className="App-header">
         <Logo />
         <Header/>
         <SearchBar />
         </header>
    <h2 className="App-info">
        <div>
          <header classname = "App-header"> Please Choose an App Below: </header>
        <div>
          <button class = 'btn btn-default' onClick={props.onMedlyClick}> Medly </button>
        </div>
        <div>
          <button class = 'btn btn-default' onClick={props.onNedClick}> Ned </button>
        </div>
        <div>
          <button class = 'btn btn-default' onClick={props.onbantClick}> bant </button>
        </div>
        <div>
          <button class = 'btn btn-default' onClick={props.onbaClick}> Breathe Again </button>
        </div>
        <div>
          <button class = 'btn btn-default' onClick={props.onICCClick}> ICanCope </button>
        </div>
        </div>
      </h2>
</span>
)
}
function mapStateToProps(state) {
  console.log('mapStateToProps', state);
  return {
    count: state.page
  }
}

function mapDispatchToProps(dispatch) {
  return{
       onMedlyClick: () => {
       console.log('clickin')
       const action = { type: 'MEDLY'}
       dispatch(action)
     },
       onNedClick: () => {
       const action = { type: 'NED'}
       dispatch(action)
     },
       onbantClick: () => {
       const action = { type: 'BANT'}
       dispatch(action)
   },
       onICCClick: () => {
       const action = { type: 'ICANCOPE'}
       dispatch(action)
  },
       onbaClick: () => {
       const action = { type: 'BREATHEAGAIN'}
       dispatch(action)
  }
}
}

export default connect(mapStateToProps, mapDispatchToProps)(Splash)
