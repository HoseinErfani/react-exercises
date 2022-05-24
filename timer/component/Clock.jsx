import React, { Component } from "react";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
    this.tick();
  }
  render() {
    return (
      <div className="container text-center m-5">
        <h1>hello user</h1>
        <h1>{this.state.date.toLocaleTimeString()}</h1>
      </div>
    );
  }
  //not good method
  tick() {
    setTimeout(() => {
      this.setState({
        date: new Date(),
      });
      this.tick();
    }, 1000);
  }
}

export default Clock;
