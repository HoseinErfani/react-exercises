import React, { Component } from "react";

export default class Time extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString(),
    };
  }

  updateTime() {
   this.timeId= setTimeout(() => {
      this.setState({
        time: new Date().toLocaleTimeString(),
      });
      console.log(this.state.time);
      this.updateTime();
    }, 1000);
  }
  componentDidMount() {
    this.updateTime();
  }
  render() {
    return <div>{this.state.time}</div>;
  }
  componentWillUnmount(){
      clearTimeout(this.timeId);
  }
}
