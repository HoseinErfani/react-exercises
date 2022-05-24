import React, { Component } from "react";
import SideBar from "./SideBar";
import Boxes from "./Boxes";
import Box from "./Box";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxes: [
        { id: 1, title: "Box 1" },
        { id: 2, title: "Box 2" },
        { id: 3, title: "Box 3" },
        { id: 4, title: "Box 4" },
      ],
      activeBoxes: [1, 2, 4],
    };
  }
  handleToggleBtn(id) {
    const activeBoxes = [...this.state.activeBoxes];
    if (activeBoxes.includes(id)) {
      activeBoxes.splice(activeBoxes.indexOf(id), id.toString().length);
    } else {
      activeBoxes.push(id);
    }
    this.setState({
      activeBoxes: activeBoxes,
    });
  }
  render() {
 
    const boxes = this.state.boxes.map((box) => {
      if (this.state.activeBoxes.includes(box.id)) {
        return <Box title={box.title}/>
      }
    });

    return (
      <div>
        <div className="container m-5">
          <div className="row">
          <SideBar 
          boxes={this.state.boxes} 
          activeBoxes={this.state.activeBoxes}
          handleToggle={this.handleToggleBtn.bind(this)}
          />
           <Boxes boxes={boxes}/>
          </div>
        </div>
      </div>
    );
  }
}
