import React from "react";

export default function Header(props) {
  return (
    <div className="chat-header clearfix header-sticky">
      <div className="d-flex align-items-center">
        <a href="#">
          <img src="./img/g1.png" alt="avatar" />
        </a>

        <div className="chat-about">
          <h6 className="m-b-0">{props.groupName}</h6>
          <small>{props.whosTyping} is typing...</small>
        </div>
      </div>
    </div>
  );
}
