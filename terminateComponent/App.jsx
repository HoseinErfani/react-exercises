import React, { Component } from 'react'
import Time from './Time'

export default class App extends Component {
    constructor(props){
        super(props);
        this.state={
            showTime:true,
        }
        this.handleClick=this.handleClick.bind(this);
    }
    handleClick(){
        this.setState({
            showTime:!this.state.showTime
        })
    }
    render() {
        const showTime=this.state.showTime;

        return (
            <div className="mt-3">
                <button onClick={this.handleClick} className="btn btn-success mb-3">
                    {showTime?"hide time":"show time"}
                </button>
                {showTime && <Time/>}

            </div>
        )
    }
}
