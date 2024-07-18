import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CreateRoom from './CreateRoom';
import styled from 'styled-components';
import { getRoomsRoute } from '../utils/APIRoutes';

const RoomList = () => {
  const [rooms, setRooms] = useState([]);
  const [showCreateRoom, setShowCreateRoom] = useState(false);

  const fetchRooms = async () => {
    try {
      const response = await axios.get(getRoomsRoute);
      setRooms(response.data);
    } catch (error) {
      console.error("Error fetching rooms:", error);
    }
  };

  useEffect(() => {
    fetchRooms();
  }, []);

  const toggleCreateRoom = () => {
    setShowCreateRoom(!showCreateRoom);
  };

  return (
    <Container>
      <button onClick={toggleCreateRoom}>
        {showCreateRoom ? 'Close Create Room' : 'Create Room'}
      </button>
      {showCreateRoom && <CreateRoom fetchRooms={fetchRooms} />}
      <h4>Available Rooms</h4>
      <RoomListContainer>
        <ul>
          {rooms.map((room) => (
            <li key={room._id}>{room.title}</li>
          ))}
        </ul>
      </RoomListContainer>
    </Container>
  );
};

const Container = styled.div`
  button {
    background-color: #9a86f3;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    margin-bottom: 1rem;
    cursor: pointer;
    border-radius: 0.5rem;
  }

  h2 {
    color: white;
  }
`;

const RoomListContainer = styled.div`
  max-height: 300px; 
  overflow-y: auto;

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    background-color: #ffffff34;
    margin-bottom: 0.5rem;
    padding: 0.5rem;
    border-radius: 0.5rem;
    color: white;
  }

  &::-webkit-scrollbar {
    width: 0.2rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ffffff39;
    border-radius: 1rem;
  }
`;

export default RoomList;

