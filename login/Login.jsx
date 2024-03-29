import React, { Component } from "react";

export default class Login extends Component {
    constructor(props){
super(props);
this.textInput=React.createRef();

this.focusOnEmail=this.focusOnEmail.bind(this);

    }
    focusOnEmail(){
        // this.textInput.current.focus();
    }
  render() {
      
    return (
      <div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            ref={this.textInput}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" onClick={this.focusOnEmail} className="btn btn-primary">
          Submit
        </button>
      </div>
    );
  }
  componentDidMount(){
    this.textInput.current.focus();
    console.log(  this.textInput.current);
  }
}
