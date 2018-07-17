import React from 'react'
import ReactDOM from 'react-dom'
import { Button, Icon } from 'semantic-ui-react'
import Director from './Director'

function Process(dispatch){
return {
    handleEnterClick: () => {
    console.log('clickin')
    const action = { type: 'Enter'}
    dispatch(action)
  },

  handleByeClick: () => {
  console.log('clickin')
  const action = { type: 'Bye'}
  dispatch(action)
  }
}
}





function Medly (props){
    const isLoggedIn = {props, isLoggedIn}
    let button;

    if (isLoggedIn) {
      button = <LogoutButton onClick={props.handleByeClick} />;
    } else {
      button = <EnterButton onClick={props.handleEnterClick} />;
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }


function UserGreeting(props) {
  return <Director/>;
}

function GuestGreeting(props) {
  return <h1>Click the button below</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

function EnterButton(props) {
  return (
    <button onClick={props.onClick}>
      Enter
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Bye
    </button>
  );
}



export default Medly
