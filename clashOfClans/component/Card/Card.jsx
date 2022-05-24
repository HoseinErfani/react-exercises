import React from "react";
import Buy from "./buy/Buy";
import Img from "./Img";
import Item from "./Item";
import UnitStates from "./UnitStates";

export default function Card(props) {
  return (
    <div className="clash-card barbarian">
      <Img img={props.hero.img} name={props.hero.name} />
      <Item classType="clash-card__level clash-card__level--barbarian">
        {props.hero.level}
      </Item>
      <Item classType="clash-card__unit-name">{props.hero.name}</Item>
      <Item classType="clash-card__unit-description">
        {props.hero.description}
      </Item>
      <Buy  name={props.hero.name} />
      <UnitStates units={props.hero.units} name={props.hero.name} />
    </div>
  );
}
