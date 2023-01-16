import React, { useState } from "react";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import SendIcon from "@mui/icons-material/Send";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import "./chatbarFooter.css";
import { useParams } from "react-router-dom";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase";

const ChatbarFooter = () => {
  const { roomId } = useParams();
  const [userInput, setUserinput] = useState({ input: "" });
  const sendMessage = async () => {
    await addDoc(collection(db, "room", roomId, "messages"), {
      message: userInput.input,
      sentAt: serverTimestamp(),
    });
    setUserinput({ input: "" });
  };

  const handleChange = (e) => {
    setUserinput({ input: e.target.value });
  };

  return (
    <div className="chat-footer">
      <SentimentSatisfiedAltIcon />
      <AttachFileIcon />
      <input
        type="text"
        onChange={handleChange}
        value={userInput.input}
        placeholder="Type a message"
      />
      <SendIcon onClick={sendMessage} />
      <KeyboardVoiceIcon />
    </div>
  );
};
export default ChatbarFooter;
