import React, { Component } from 'react'

export default class ClassBuy extends Component {
    constructor(props) {
        super(props);
     this.showMsg=this.showMsg.bind(this)  
     this.clickHandle=this.clickHandle.bind(this) 
    }
    showMsg(){
        alert(this.props.name)
    }
    clickHandle() {
        setTimeout(this.showMsg, 2000)
    }
    render() {
        return (
            <div >
                <div className="badge bg-danger" onClick={this.clickHandle}>Buy </div>
                <div>class</div>
            </div>
        )
    }
}
