import React, { Component } from "react";
import Chat from "./component/Chat";
import "./style.css";
import Header from "./component/Header";
import History from "./component/History";
import Footer from "./component/Footer";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.handleMessage = this.handleMessage.bind(this);
    this.state = {
      title: "chat",
      typig: "ali",
      chatList: [
        {
          name: "hosein",
          type: "send",
          msg: "hello how are you",
          time: "11:25 AM",
        },
        {
          name: "ali",
          type: "recieve",
          msg: "good and youj",
          time: "11:26 AM",
        },
        { name: "hosein", type: "send", msg: "good", time: "11:27 AM" },
        { name: "ali", type: "recieve", msg: "ok", time: "11:28 AM" },
      ],
      icons: {
        user1: "p1.png",
        user2: "p2.png",
      },
    };
  }
  handleMessage(msg) {
    // console.log(msg);
    this.setState({
      chatList: [
        ...this.state.chatList,
        { name: "hosein", type: "send", msg: msg, time:  new Date().toLocaleTimeString() },
      ],
    });
  }
 
  render() {
    return (
      <div className="row clearfix justify-content-center">
        <div className="col-6">
          <div className="card chat-app " >
            <div className="chat">
              <Header 
                whosTyping={this.state.typig}
                groupName={this.state.title}
              />
              <History
                chatList={this.state.chatList}
                icons={this.state.icons}
              />
              <Footer handleMessage={this.handleMessage} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
