import React from "react";

const MessageList = ({ messages }) => (
  <div className="space-y-3">
    {messages.map((msg, index) => (
      <div
        key={index}
        className={`p-3 rounded-md w-fit max-w-[75%] ${
          msg.sender === "user"
            ? "bg-blue-100 self-end ml-auto"
            : "bg-gray-200 self-start mr-auto"
        }`}
      >
        {msg.text}
      </div>
    ))}
  </div>
);

export default MessageList;
