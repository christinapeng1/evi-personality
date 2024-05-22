import { useVoice } from "@humeai/voice-react";
import { useEffect, useState } from "react";
import "../../Messages.css"

export default function Controls() {
  const { messages } = useVoice();
  const [ topEmotions, setTopEmotions ] = useState([])
  const [ currentTop3Emotions, setCurrentTop3Emotions] = useState([]);

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

  //set top overall top emotions
  useEffect(() => {
    messages.forEach((msg) => {
      if (msg.type === "user_message") {
        const scoresArray = Object.entries(msg.models.prosody.scores);
        scoresArray.sort((a, b) => (b[1] as number) - (a[1] as number));
        setTopEmotions((prevTopEmotions) => [...prevTopEmotions, scoresArray[0]]);
        console.log(topEmotions);
      }
    });
  }, [messages]);

  //set current top 3 emotions the user is experiencing
  useEffect(() => {
    messages.forEach((msg) => {
      if (msg.type === "user_message") {
        const scoresArray = Object.entries(msg.models.prosody.scores);
        scoresArray.sort((a, b) => (b[1] as number) - (a[1] as number));
        const top3Scores = scoresArray.slice(0, 3);
        setCurrentTop3Emotions(top3Scores);
        console.log(currentTop3Emotions);
      }
    });
  }, [messages]);

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
