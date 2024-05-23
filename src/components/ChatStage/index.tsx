import { useVoice } from '@humeai/voice-react';
import React from 'react';
import { match } from 'ts-pattern';
import Controls from './Messages';
import Emotions from './Emotions';
import "../../Messages.css"

/**
 * Main view for displaying the conversation
 */
const ChatStage: React.FC = () => {
  const { connect, disconnect, status } = useVoice();

  const handleConnect = () => {
    if (status.value === 'connected') {
      disconnect();
      return;
    }
    void connect()
      .then(() => {})
      .catch((e) => {
        console.error(e);
      });
  };

  return (
    <div className="main-container">
      <div>
        {match(status.value)
          .with('error', () => {
            return (
              <div>
                <p>Something went wrong</p>
                <button onClick={() => handleConnect()}>Try again</button>
              </div>
            );
          })
          .with('disconnected', 'connecting', () => {
            return (
              <div className="about-container">
                <div className="about-header">EVI Personality</div>
                <div className="about-body">
                  {' '}
                  Chat with an empathic voice assistant specialized
                  in the Myers-Briggs Type Indicator (MBTI). Built using Hume
                  AI's Empathic Voice Interface (EVI), the AI assistant will ask you
                  a few questions about your responses to different situations,
                  which will be used to determine your four-letter MBTI personality
                  type.
                </div>
                <div className="about-body">
                  Begin your conversation in a quiet
                  space. When you're ready, click 'Start chat!' to begin.
                </div>
              </div>
            );
          })
          .with('connected', () => {
            return (
              <React.Fragment>
                <h1 className="absolute top-6 text-4xl font-bold">
                  EVI Personality
                </h1>
                <h1 className="intro-text">
                  {" "}
                  Please begin the conversation in a quiet space. Start by
                  saying 'hello!'
                </h1>
                <div className="chat-wrapper">
                  <div className="controls">
                    <Controls />
                  </div>
                  <div className="emotion-chart">
                    <Emotions />
                  </div>
                </div>
              </React.Fragment>
            );
          })
          .exhaustive()}
      </div>
      <button
        onClick={() => handleConnect()}
        className="absolute bottom-12 w-48 bg-blue-200 px-6 py-4 rounded-full 9 font-bold border-4 border-black text-xl hover:bg-blue-200/60 transition"
      >
        {status.value === 'connected' ? 'End chat' : 'Start chat!'}
      </button>
    </div>
  );
};

export default ChatStage;
