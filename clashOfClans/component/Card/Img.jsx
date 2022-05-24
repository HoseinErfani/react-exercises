import React from "react";

export default function Img(props) {
  return (
    <div className={`clash-card__image clash-card__image--${props.name}`}>
      <img
        src={props.img}
        alt="barbarian"
      />
    </div>
  );
}
