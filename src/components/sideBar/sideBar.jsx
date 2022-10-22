import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { db } from "../../firebase";
import { addDoc, collection, getDocs, Timestamp } from "firebase/firestore";
import SidebarHeader from "../sidebarHeader/sidebarHeader";
import SidebarForm from "../sidebarForm/sidebarForm";
import SidebarButton from "../sidebarButton/sidebarButton";
import SidebarRooms from "../sidebarRooms/sidebarRooms";
import "./sideBar.css";

const SideBar = () => {
  const [rooms, setRooms] = useState([]);
  const roomCollection = collection(db, "room");

  const colorArr = [
    "#FF0000",
    "#808080",
    "#C0C0C0",
    "#800000",
    "#00FF00",
    "#808000",
    "#7FFFD4",
    "#FFC0CB",
    "#ADD8E6",
    "#800080",
  ];

  const addChats = async (e) => {
    e.preventDefault();
    const roomName = prompt("Add a room name");

    let randColor = colorArr[(Math.random() * colorArr.length) | 0];

    if (roomName.trim().length === 0) {
      alert("Enter a room name");
    } else {
      try {
        await addDoc(roomCollection, {
          roomName: roomName,
          createdAt: Timestamp.now(),
          color: randColor,
        });
      } catch (err) {
        alert(err);
      }
    }
  };

  useEffect(() => {
    const getRooms = async () => {
      const data = await getDocs(roomCollection);
      setRooms(
        data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      );
    };
    getRooms();
  }, [rooms]);

  return (
    <div className="container">
      <SidebarHeader />
      <SidebarForm />
      <SidebarButton addChats={addChats} />

      {rooms.map((room) => {
        return (
          <Link to={`/rooms/${room.id}`} key={room.id}>
            <SidebarRooms
              createdAt={room.createdAt.seconds}
              roomName={room.roomName}
              firstLetter={room.roomName
                .split(" ")
                .map((e) => e[0])
                .join("")}
              color={room.color}
            />
          </Link>
        );
      })}
    </div>
  );
};

export default SideBar;
