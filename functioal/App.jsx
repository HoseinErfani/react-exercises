import React, { useState, useEffect } from "react";

export default function App() {
  const [count, setCount] = useState(1);
  const [value, setValue] = useState(1)

  function add() {

    if (count !== 10) {
      setCount(count+value);
    }
  }
  return (
    <div>
        <p className="alert alert-info">{count}</p>
      <input type="number" value={value} 
      onChange={(e)=>setValue(Number(e.target.value))}
      className="form-control" />
      <button onClick={()=>add()} className="btn btn-success">
        click
      </button>
    </div>
  );
}
