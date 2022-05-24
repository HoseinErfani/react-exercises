import React from "react";
import Toggle from "./Toggle";

export default function SideBar(props) {
  const toggle = props.boxes.map((box) => {
    return (
      <div className="form-check form-switch">
        <Toggle
          activeBoxes={props.activeBoxes}
          box={box}
          handleToggle={props.handleToggle}
        />
      </div>
    );
  });

  return <div className="col-3">{toggle}</div>;
}
