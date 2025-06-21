import React, { useState } from "react";
import MessageList from "../components/MessageList";
import TextInput from "../components/TextInput";
import { getBotReply } from "../api/getBotReply";

const Chat = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "👋 Hello! Ask me anything about AI." },
  ]);


  const handleSend = (text) => {
    const userMsg = { sender: "user", text };
    const botReply = getBotReply(text);
    const botMsg = { sender: "bot", text: botReply };

    setMessages((prev) => [...prev, userMsg, botMsg]);
  };

  return (
    <div className="flex flex-col flex-1 p-4 overflow-hidden">
      <div className="flex-1 overflow-y-auto mb-4">
        <MessageList messages={messages} />
      </div>
      <TextInput onSend={handleSend} />
    </div>
  );
};

export default Chat;
