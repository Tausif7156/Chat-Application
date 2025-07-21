import React, { useState } from "react";
import ChatRoom from './components/ChatRoom';
import RoomList from './components/RoomList';
import UsernameModal from './components/UsernameModal';

function App() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");

  if (!username) return <UsernameModal onSubmit={setUsername} />;

  return room ? (
    <ChatRoom username={username} room={room} onLeaveRoom={() => setRoom("")} />
  ) : (
    <RoomList onSelectRoom={setRoom} />
  );
}

export default App;
