import React, { useState } from "react";
import Form from "./components/Form";
import MessageList from "./components/MessageList";
import axios from "axios";
import './App.css'

const App = () => {
  const [messages, setMessages] = useState([]);

  const fetchMessages = async () => {
    const res = await axios.get(
      "https://pager-bharatjivv-default-rtdb.asia-southeast1.firebasedatabase.app/messages.json"
    );
    const data = res.data;
    let messageList = [];
    for (let messageId in data) {
      messageList.push(data[messageId]);
    }
    messageList.reverse();
    const latestFive = messageList.slice(0, 5);
    setMessages(latestFive);
  };

  return (
    <div className="app">
      <div className="container">
        <div className="shape-1"></div>
        <div className="shape-2"></div>
        <Form onMessageSent={fetchMessages} />
      </div>
      <MessageList messages={messages} fetchMessages={fetchMessages} />
    </div>
  );
};

export default App;
