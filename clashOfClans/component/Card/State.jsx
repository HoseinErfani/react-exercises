import React from "react";

export default function State({state,value,noBorder}) {//not key words
  return (
    <div className={`one-third ${noBorder?'no-border':''}`}>
      <div className="stat">{state} </div>
      <div className="stat-value">{value}</div>
    </div>
  );
}
