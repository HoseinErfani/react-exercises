import React from "react";

export default function Table(props) {

  return (
    <table className="table">
      <thead>
        <tr>
          <th>N</th>
          <th>Tasks</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {props.trs}
        
      </tbody>
    </table>
  );
}
