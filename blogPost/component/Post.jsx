import React from "react";

export default function Post(props) {
  return (
    <>
      <h1 className="text-black text-center">{props.data.title}</h1>
      <div className=" row">
        <div className="col-12 col-md-6">
          <img
            src={`./blogImg/${props.data.image}`}
            alt={props.data.title}
            className="img-thumbnail"
          />
        </div>
        <div className="col-12 col-md-6">
          <div className="post fs-4">{props.data.body}</div>
        </div>
      </div>
    </>
  );
}
