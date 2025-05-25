// src/components/Chat.js
import React, { useState, useEffect, useRef } from 'react';
import './chat.css';

const Chat = ({ username }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const ws = useRef(null);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    ws.current = new WebSocket('ws://localhost:8080');

    ws.current.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        setMessages((prev) => [...prev, data]);
      } catch (e) {
        setMessages((prev) => [...prev, { sender: 'Server', text: event.data }]);
      }
    };

    return () => {
      ws.current.close();
    };
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = () => {
    if (input.trim()) {
      const message = { sender: username, text: input };
      ws.current.send(JSON.stringify(message));
      setInput('');
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-header">{username}</div>

      <div className="chat-messages">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`chat-bubble ${msg.sender === username ? 'me' : 'them'}`}
          >
            <div className="chat-sender">{msg.sender}</div>
            <div className="chat-text">{msg.text}</div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="chat-input-box">
        <input
          type="text"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') sendMessage();
          }}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chat;
