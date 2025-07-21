import React, { useState } from "react";

const mockRooms = ["General", "Tech", "Random"];

function RoomList({ onSelectRoom }) {
  const [newRoom, setNewRoom] = useState("");

  return (
    <div>
      <h2>Available Rooms</h2>
      <ul>
        {mockRooms.map((room) => (
          <li key={room} onClick={() => onSelectRoom(room)}>
            {room}
          </li>
        ))}
      </ul>
      <input value={newRoom} onChange={(e) => setNewRoom(e.target.value)} />
      <button onClick={() => onSelectRoom(newRoom)}>Create Room</button>
    </div>
  );
}

export default RoomList;
