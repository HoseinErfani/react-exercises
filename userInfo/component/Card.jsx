import React from "react";

export default function Card(props) {
  return (
    <div
      className={
        props.bg === "bg-light"
          ? "bg-light text-dark m-5 card"
          : props.bg + " text-white m-5 card"
      }
      style={{ maxWidth: "18rem" }}
    >
      <img className="card-img-top" src={props.src} alt="flag" />
      <div className="card-header">{props.header}</div>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.title +','+props.text}</p>
      </div>
    </div>
  );
}
