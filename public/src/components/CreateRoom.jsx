import React, { useState } from 'react';
import axios from 'axios';
import {createRoomRoute} from "../utils/APIRoutes";

const CreateRoom = ({ fetchRooms }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(createRoomRoute, { title });
      setTitle('');
      fetchRooms(); // Refresh the list of rooms after creating a new one
    } catch (error) {
      alert(`Error creating room: ${error.response.data.msg}`);
      console.error("Error creating room:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Room title"
        required
      />
      <button type="submit">Create Room</button>
    </form>
  );
};

export default CreateRoom;
