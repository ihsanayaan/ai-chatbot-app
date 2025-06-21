import React from 'react';
import { Lightbulb } from 'lucide-react'; // Optional: Install lucide-react

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-6 py-4 bg-gray-900 text-white shadow-md">
      <h1 className="text-xl font-bold animate-pulse">🤖 Welcome to AI Chatbot</h1>
      <Lightbulb className="text-yellow-400 animate-bounce" />
    </div>
  );
};

export default Navbar;
