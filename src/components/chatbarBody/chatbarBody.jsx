import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebase";
import "./chatbarBody.css";

const ChatbarBody = (props) => {
  const [messages, setMessages] = useState([]);
  const room = useParams();
  const roomId = room.roomId;
  // const roomCollection = collection(db, "room", roomId, "messages");

  // useEffect(() => {
  //   onSnapshot(collection(db, "rooms", roomId, "messages"), (snapshot) => {
  //     setMessages(snapshot.docs.map((doc) => doc.data()));
  //   });
  // }, [messages]);

  useEffect(() => {
    const getMessages = async () => {
      const data = await getDocs(collection(db, "room", roomId, "messages"));
      setMessages(
        data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      );
    };
    getMessages();
  }, [roomId, messages]);

  return (
    <div className="chat-body">
      {messages.map((message) => {
        return (
          <div key={message.id} className="message-box">
            <p>{message.message}</p>
            <p>{new Date(message.sentAt?.toDate()).toUTCString()}</p>
          </div>
        );
      })}
    </div>
  );
};
export default ChatbarBody;
