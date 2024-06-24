import React from 'react';
import './ChatPanel.css';

const ChatPanel = () => {
  return (
    <div className="chat-panel">
      <h2>Chat</h2>
      <div className="messages">
        <p>Suraj Sir: Good Morning Everyone!</p>
        <p>Saurav: Good Morning Sir !!</p>
      </div>
      <input type="text" placeholder="Type a message" />
    </div>
  );
};

export default ChatPanel;
