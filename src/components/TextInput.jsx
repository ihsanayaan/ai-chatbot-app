import React, { useState } from "react";

const TextInput = ({ onSend }) => {
  const [input, setInput] = useState("");
  const [listening, setListening] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    onSend(input.trim());
    setInput("");
  };

  const handleVoiceInput = () => {
    if (!("webkitSpeechRecognition" in window)) {
      alert("🎤 Voice recognition not supported in this browser.");
      return;
    }

    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => setListening(true);

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setInput(transcript);
      onSend(transcript);
    };

    recognition.onerror = (e) => alert("Voice error: " + e.error);

    recognition.onend = () => setListening(false);

    recognition.start();
  };

  return (
   <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row mt-3 gap-2 w-full">
  <input
    type="text"
    placeholder="Type your message..."
    value={input}
    onChange={(e) => setInput(e.target.value)}
    className="flex-1 px-4 py-2 rounded-md border border-gray-300 w-full"
  />
  <div className="flex gap-2 sm:flex-row w-full sm:w-auto">
    <button
      type="submit"
      className="bg-blue-600 text-white px-4 py-2 rounded-md w-full sm:w-auto"
    >
      Send
    </button>
    <button
      type="button"
      onClick={handleVoiceInput}
      className={`text-white px-4 py-2 rounded-md w-full sm:w-auto ${
        listening ? "bg-red-600" : "bg-blue-600"
      }`}
    >
      🎤
    </button>
  </div>
</form>
  );
};

export default TextInput;
