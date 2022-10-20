import React from "react";
import "./sidebarButton.css";

const sidebarButton = (props) => {
  return (
    <div className="sidebar-button">
      <form>
        <button type="submit" onClick={props.addChats}>
          <h1>Add new chat</h1>
        </button>
      </form>
    </div>
  );
};

export default sidebarButton;
