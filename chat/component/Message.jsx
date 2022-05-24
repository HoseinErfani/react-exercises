import React from "react";

export default function Message(props) {
  var float = "float-right";
  var msgClass = "my";
  var alignTime = "text-left";
 var textAlign="text-right";
  if (props.isRecieve) {
    msgClass = "other";
    float = "float-left";
    alignTime = "text-right";
    textAlign="text-left";
    
    
  }
  return (
    <li className="clearfix ">
      <div className={float+' align-items-start d-flex'}>


        {props.isRecieve ? <img src={"./img/" + props.imgSrc} alt="avatar" /> : ""}
        <div className={msgClass + "-message m-2"}>
          <div className={"d-inline-flex flex-column message "+textAlign}>
            <span className="font-weight-bold">  {props.name}</span>
            <div className="hr"></div>
            {props.msg}
            <span
              className={"message-data-time text-muted " + alignTime } >
             {props.time}
            </span>
          </div>
        </div>
        {props.isRecieve ? "" : <img src={"./img/" + props.imgSrc} alt="avatar" />}

        
      </div>
    </li>
  );
}
