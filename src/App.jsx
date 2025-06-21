import { useEffect, useState } from "react";
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Chat from './pages/Chat';

const App = () => {
   const [darkMode, setDarkMode] = useState(() => localStorage.getItem("theme") === "dark");

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);
  return (
    <div className="flex h-screen bg-white dark:bg-gray-900 text-black dark:text-black transition-colors">
      <Sidebar onToggleTheme={toggleTheme} />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <Chat />
      </div>
    </div>
  );
};

export default App;
