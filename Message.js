import React from "react";
import { formatTime } from "../utils/formatTime";

function Message({ msg }) {
  return (
    <div className="message">
      <strong>{msg.user}</strong> [{formatTime(msg.time)}]: {msg.text}
    </div>
  );
}

export default Message;
