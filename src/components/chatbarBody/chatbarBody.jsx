import React from "react";
import { useParams } from "react-router-dom";
import "./chatbarBody.css";

const ChatbarBody = () => {
  const room = useParams();
  const rooms = console.log(room.roomId);
  return <div className="chat-body">{rooms}</div>;
};
export default ChatbarBody;
