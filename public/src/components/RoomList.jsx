import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CreateRoom from './CreateRoom';

const RoomList = () => {
  const [rooms, setRooms] = useState([]);

  const fetchRooms = async () => {
    try {
      const response = await axios.get('/api/get-rooms/');
      setRooms(response.data);
    } catch (error) {
      console.error("Error fetching rooms:", error);
    }
  };

  useEffect(() => {
    fetchRooms();
  }, []);

  return (
    <div>
      <h2>Available Rooms</h2>
      <ul>
        {rooms.map((room) => (
          <li key={room._id}>{room.title}</li>
        ))}
      </ul>
      <CreateRoom fetchRooms={fetchRooms} />
    </div>
  );
};

export default RoomList;
