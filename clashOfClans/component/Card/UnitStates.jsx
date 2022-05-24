import React from "react";
import State from "./State";

export default function UnitStates(props) {
  const units = props.units.map((unit,index) => {
    let noBorder=(props.units.length===index+1)?true:false;
    return <State state={unit.state} value={unit.value} noBorder={noBorder}/>;
  });
  return (
    <div className={`clash-card__unit-stats clash-card__unit-stats--${props.name} clearfix`}>
      {units}
    </div>
  );
}
