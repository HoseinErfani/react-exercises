import React, { Component } from "react";
import Header from "./component/Header";
import Table from "./component/Table";
import Tr from "./component/Tr";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placeHolder: "add new task  . . . ",
      btnName: "add",
      tasks: [
        { id: 1, task: "do some thing 1 " },
        { id: 2, task: "do some thing 2 " },
        { id: 3, task: "do some thing 3 " },
      ],
      top: 3,
    };
    this.addTask = this.addTask.bind(this);
    this.remove = this.remove.bind(this);
  }
  addTask(tsk) {
    let top=this.state.top+1;
    this.setState({
      tasks: [...this.state.tasks,
         { id: top , task: tsk }],
         top:top
    });
  }
   removeItemOnce(arr, value) {
    var index = arr.indexOf(value);
    if (index > -1) {
      arr.splice(index, 1);
    }
    return arr;
  }

  remove(id) {
    let tr;
    for (tr of this.state.tasks) {
      if (tr.id === id) {
      let map=this.state.tasks;
      this.removeItemOnce(map,tr);
      this.setState({
        tasks:map
      })
      }
    }
  }

  render() {
    let c = 1;
    const trs = this.state.tasks.map((tr) => {
      return <Tr rmEvent={this.remove} id={tr.id} num={c++} task={tr.task} />;
    });
    return (
      <div>
        <div className="container">
          <div className="row mt-5">
            <div className="col-8 mx-auto">
              <Header
                placeHolder={this.state.placeHolder}
                btnName={this.state.btnName}
                add={this.addTask}
              />
              <Table trs={trs} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
