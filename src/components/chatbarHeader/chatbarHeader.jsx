import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import CallIcon from "@mui/icons-material/Call";
import SearchIcon from "@mui/icons-material/Search";
import VideocamIcon from "@mui/icons-material/Videocam";
import "./chatbarHeader.css";

const ChatbarHeader = () => {
  return (
    <div className="chat-header">
      <AccountCircleIcon id="chat-header-icon" fontSize="large" />
      <div className="chatbar-right-end">
        <VideocamIcon />
        <CallIcon />
        <div className="vert-line"></div>
        <SearchIcon />
        <MoreHorizIcon />
      </div>
    </div>
  );
};
export default ChatbarHeader;
