"use client";
import { useVoice } from "@humeai/voice-react";
import { useEffect } from "react";
import "../../Messages.css"

export default function Controls() {
  const { messages } = useVoice();

  useEffect(() => {
    const chatElement = document.getElementById('chat-container');
    if (chatElement) {
      chatElement.scrollTop = chatElement.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    const chatElement = document.getElementById('about-container');
    if (chatElement) {
      chatElement.scrollTop = chatElement.scrollHeight;
    }
  }, []);

  return (
    <div className="chat-container" id="chat-container">
      {messages.map((msg, index) => {
        if (msg.type === 'user_message') {
          return (
            <div key={msg.type + index} className="user-message">
              <div className="role">You:</div>
              <div className="content">{msg.message.content}</div>
            </div>
          );
        }
        if (msg.type === 'assistant_message') {
          return (
            <div key={msg.type + index} className="assistant-message">
              <div className="role">Assistant:</div>
              <div className="content">{msg.message.content}</div>
            </div>
          );
        }

        return null;
      })}
    </div>
  );
}
