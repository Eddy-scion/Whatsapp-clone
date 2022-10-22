import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import SideBar from "./components/sideBar/sideBar";
import ChatBar from "./components/chatBar/chatBar";

const App = () => {
  return (
    <div className="main-container">
      <SideBar />
      <Routes>
        <Route path="/" element={<ChatBar />}>
          <Route path="rooms/:roomId" element={<ChatBar />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
