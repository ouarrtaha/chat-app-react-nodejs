import React, { useState, useEffect, useRef } from "react";
import axios from 'axios';
import RoomList from "./RoomList";
import ChatRoomContainer from "./ChatRoomContainer";
import { io } from "socket.io-client";
import { getRoomsRoute } from "../utils/APIRoutes";

const App = () => {
  const [currentRoom, setCurrentRoom] = useState(null);
  const socket = useRef();

  useEffect(() => {
    socket.current = io("http://localhost:3000");

    const fetchRooms = async () => {
      const response = await axios.get(getRoomsRoute);
      setRooms(response.data);
    };
    fetchRooms();
  }, []);

  return (
    <div>
      <RoomList setCurrentRoom={setCurrentRoom} />
      {currentRoom ? (
        <ChatRoomContainer currentRoom={currentRoom} socket={socket} />
      ) : (
        <div>Please select a room to start chatting</div>
      )}
    </div>
  );
};

export default App;

