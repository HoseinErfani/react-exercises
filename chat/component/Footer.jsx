import React, { Component } from "react";

export default class Footer extends Component {
  constructor(props){
super(props);
this.handleChange=this.handleChange.bind(this)
this.handleSubmit=this.handleSubmit.bind(this)
this.handleKeyup=this.handleKeyup.bind(this)
this.state={
  input:''
}

  }
  handleChange(e){
    this.setState({
      input:e.target.value

    })
  }
  handleSubmit(){
    this.props.handleMessage(this.state.input)
    this.setState({
      input:''

    })
  }
  handleKeyup(e){
    if (e.keyCode === 13) {
      this.handleSubmit();
    }
  }
  render() {
    return (
      <div className="chat-message clearfix footer-sticky">
        <div className="input-group mb-0">
          <div className="input-group-prepend">
            <button
             className="btn btn-info"
              onClick={this.handleSubmit}>
              <i className="fa fa-send"></i>
            </button>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Enter text here..."
            value={this.state.input}
            onChange={this.handleChange}
            onKeyUp={this.handleKeyup}
          />
        </div>
      </div>
    );
  }
}
