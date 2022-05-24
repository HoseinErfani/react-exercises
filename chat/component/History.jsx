import React from "react";
import Message from "./Message";
export default function History(props) {
  const chats = props.chatList.map((chat) => {
    return (
      <Message
        msg={chat.msg}
        isRecieve={"recieve" === chat.type ? true : false}
        name={chat.name}
        time={chat.time}
        imgSrc={"recieve" === chat.type ? props.icons.user1 : props.icons.user2}
      />
    );
  });
  return (
    <div className="chat-history " style={{'minHeight': '100%'}}>
      <ul className="m-b-0">{chats}</ul>
    </div>
  );
}
