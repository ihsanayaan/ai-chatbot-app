import React, { useState, useEffect } from 'react';
import { Send, Mic } from 'lucide-react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const ChatInput = ({ onSend }) => {
  const [text, setText] = useState('');
  const { transcript, listening, resetTranscript } = useSpeechRecognition();

  useEffect(() => {
    setText(transcript);
  }, [transcript]);

  const handleSend = () => {
    if (text.trim()) {
      onSend(text);
      setText('');
      resetTranscript();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSend();
  };

  const startListening = () => {
    SpeechRecognition.startListening({ continuous: false });
  };

  return (
    <div className="flex items-center gap-2 p-3 bg-white shadow rounded-md">
      <input
        type="text"
        placeholder="Type or speak your message..."
        className="flex-1 p-2 border rounded-md outline-none"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button
        type="button"
        onClick={startListening}
        className={`p-2 rounded-full ${listening ? 'bg-green-200' : 'bg-gray-200'} hover:bg-gray-300`}
        title="Start Voice Input"
      >
        <Mic size={18} />
      </button>
      <button
        type="button"
        onClick={handleSend}
        className="p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        <Send size={18} />
      </button>
    </div>
  );
};

export default ChatInput;
