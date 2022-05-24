import React from "react";

export default function Tr(props) {
  return (
    <tr>
      <td>{props.num}</td>
      <td>{props.task}</td>
      <td>
        <button data-id={props.id} onClick={()=>props.rmEvent(props.id)} className="btn btn-danger btn-sm">
          X
        </button>
      </td>
    </tr>
  );
}
