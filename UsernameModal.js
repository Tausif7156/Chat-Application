import React, { useState } from "react";

function UsernameModal({ onSubmit }) {
  const [input, setInput] = useState("");

  return (
    <div className="modal">
      <h2>Enter a username</h2>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={() => input && onSubmit(input)}>Join</button>
    </div>
  );
}

export default UsernameModal;
