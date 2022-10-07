import React from "react";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import "./chatbarFooter.css";

const ChatbarFooter = () => {
  return (
    <div className="chat-footer">
      <SentimentSatisfiedAltIcon />
      <AttachFileIcon />
      <input type="text" placeholder="Type a message" />
      <KeyboardVoiceIcon />
    </div>
  );
};
export default ChatbarFooter;
