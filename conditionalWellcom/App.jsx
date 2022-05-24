import React, { Component } from "react";
import Wellcome from "./Wellcome";
import LoginBtn from "./LoginBtn";
import LogoutBtn from "./LogoutBtn";
import Message from "./Message";
export default class App extends Component {
  state = {
    isLoggedIn: false,
  };

  handleLogout() {
    this.setState({
      isLoggedIn: false,
    });
  }
  handleLogin() {
    this.setState({
      isLoggedIn: true,
    });
  }
  render() {
    let button = null;
    if (this.state.isLoggedIn) {
        button = <LogoutBtn handleClick={()=>this.handleLogout()}/>;

    } else {
      button = <LoginBtn handleClick={()=>this.handleLogin()}/>;
    }
    return (
      <>
        <Wellcome isLoggedIn={this.state.isLoggedIn} />
        {button}
       <Message isLoggedIn={this.state.isLoggedIn}/>
      </>
    );
  }
}
