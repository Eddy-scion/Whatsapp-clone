import React from "react";
import ChatbarHeader from "../chatbarHeader/chatbarHeader";
import ChatbarBody from "../chatbarBody/chatbarBody";
import ChatbarFooter from "../chatbarFooter/chatbarFooter";
import "./chatBar.css";

const ChatBar = () => {
  return (
    <div className="chat-container">
      <ChatbarHeader />
      <ChatbarBody />
      <ChatbarFooter />
    </div>
  );
};

export default ChatBar;
