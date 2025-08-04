import React, { useEffect } from "react";

const MessageList = ({ messages, fetchMessages }) => {
  useEffect(() => {
    fetchMessages(); // Initial fetch on mount
  }, []);

  return (
    <div className="message-container">
      {messages.length > 0 &&
        messages.map((message, index) => (
          <div key={index} className="message-card">
            <div className="user-name">{message.name}</div>
            <div className="user-message">{message.message}</div>
          </div>
        ))}
    </div>
  );
};


export default MessageList;