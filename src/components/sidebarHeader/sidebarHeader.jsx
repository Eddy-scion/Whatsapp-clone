import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import AddIcon from "@mui/icons-material/Add";
import "./sidebarHeader.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const SidebarHeader = () => {
  return (
    <React.Fragment>
      <div className="nav">
        <AccountCircleIcon id="user-icon" fontSize="large" />
        <DonutLargeIcon id="donut-icon" />
        <AddIcon id="add-icon" color="gray" />
        <MoreHorizIcon id="more-icon" />
      </div>
    </React.Fragment>
  );
};

export default SidebarHeader;
