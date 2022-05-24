import React from "react";

export default function Toggle(props) {
  return (
    <>
      <input
        className="form-check-input"
        type="checkbox"
        id={"c" + props.box.id}
        defaultChecked={props.activeBoxes.includes(props.box.id)}
        onClick={() => props.handleToggle(props.box.id)}
      />
      <label className="form-check-label text-white" htmlFor={"c" + props.box.id}>
        {props.box.title}
      </label>
    </>
  );
}
