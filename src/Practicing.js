import React from 'react'
import ReactDOM from 'react-dom'
import { Button, Icon } from 'semantic-ui-react'
import Director from './Director'

class Medly extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {Platform: false};
  }

  handleLoginClick() {
    this.setState({Platform: true});
  }

  handleLogoutClick() {
    this.setState({Platform: false});
  }

  render() {
    const Platform = this.state.Platform;
    let button;

    if (Platform) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton  class = 'btn btn-default' onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        <Greeting Platform={Platform} />
        {button}
      </div>
    );
  }
}

function UserGreeting(props) {
  return <Director/>;
}

function GuestGreeting(props) {
  return <h1 className = 'Apps'>Click</h1>;
}

function Greeting(props) {
  const Platform = props.Platform;
  if (Platform) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

ReactDOM.render(
  <Medly />,
  document.getElementById('root')
);

export default Medly
