import React from "react";
import "./App.css";
import SideBar from "./components/sideBar/sideBar";
import ChatBar from "./components/chatBar/chatBar";

const App = () => {
  return (
    <div className="main-container">
      <SideBar />
      <ChatBar />
    </div>
  );
};

export default App;
