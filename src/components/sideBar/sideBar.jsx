import React from "react";
import SidebarHeader from "../sidebarHeader/sidebarHeader";
import SidebarForm from "../sidebarForm/sidebarForm";
import "./sideBar.css";

const SideBar = () => {
  return (
    <React.Fragment>
      <div className="container">
        <SidebarHeader />
        <SidebarForm />
      </div>
    </React.Fragment>
  );
};

export default SideBar;
