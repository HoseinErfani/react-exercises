import React, { Component } from "react";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };
     this.handleWrite=this.handleWrite.bind(this);

  }

  handleWrite(e){
    this.setState({
      input:e.target.value
    })
  }
  render() {
    return (
      <div className=" input-group input-group-sm mb-3">
        <input
          type="text"
          className="form-control"
          value={this.state.input}
          onChange={this.handleWrite}
          
          placeholder={this.props.placeHolder}

/>
        <button
          className="btn btn-outline-secondary"
          type="button"
          
          onClick={()=>{
            this.props.add(this.state.input);
          }}
        >
          {this.props.btnName}
        </button>
      </div>
    );
  }
}
