import React, { Component } from "react";

class AppClick extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clickCount: 0,
    };
  }
  render() {
    return (
      <div>
        <h1 className="alert alert-danger">click count is {this.state.clickCount}</h1>
        <button className="btn btn-success" onClick={this.handleClick.bind(this)}>click me</button>
      </div>
    );
  }
  handleClick(e) {
      console.log(e.nativeEvent);
    this.setState(() => {
        return {
            clickCount:this.state.clickCount+1,
        }
    });
  }
}

export default AppClick;
