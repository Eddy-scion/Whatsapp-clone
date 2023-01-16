import React, { useState } from "react";
import ChatbarHeader from "../chatbarHeader/chatbarHeader";
import ChatbarBody from "../chatbarBody/chatbarBody";
import ChatbarFooter from "../chatbarFooter/chatbarFooter";
import "./chatBar.css";
import { addDoc, serverTimestamp, collection } from "firebase/firestore";
import { db } from "../../firebase";
import { useParams } from "react-router-dom";

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
