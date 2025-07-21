import React, { useState, useEffect } from "react";
import Message from "./Message";
import io from "socket.io-client";

let socket;

function ChatRoom({ username, room, onLeaveRoom }) {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    socket = io("ws://localhost:3000"); // or your backend address
    socket.emit("join", { username, room });

    socket.on("message", (msg) => {
      setMessages((prev) => [...prev, msg]);
    });

    return () => socket.disconnect();
  }, [room, username]);

  const sendMessage = () => {
    if (text.trim()) {
      socket.emit("sendMessage", text);
      setText("");
    }
  };

  return (
    <div>
      <h3>Room: {room}</h3>
      <button onClick={onLeaveRoom}>Leave Room</button>
      <div className="chat-box">
        {messages.map((msg, idx) => (
          <Message key={idx} msg={msg} />
        ))}
      </div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}
export default ChatRoom;
