import React, { useState } from 'react';
import {
  MessageCircle, Settings, Bot, X, Menu,
  Trash2, Sun, LogOut
} from 'lucide-react';

const Sidebar = ({ onToggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false); // sidebar toggle
  const [activeMenu, setActiveMenu] = useState(null); // submenu toggle

  const toggleMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  const handleClearHistory = () => {
    localStorage.removeItem("chatHistory");
    alert("🧹 Chat history cleared!");
    window.location.reload(); // optionally refresh
  };

  const handleLogout = () => {
    alert("🔐 Logged out!");
    // Add actual logout logic here if needed
  };

  return (
    <>
      {/* Toggle Button for Mobile */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="absolute top-4 left-4 z-50 bg-gray-800 text-white p-2 rounded-md shadow-md md:hidden"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Sidebar Panel */}
      <div
        className={`bg-gray-800 text-white p-4 flex flex-col shadow-lg transition-transform duration-300 z-40
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
        fixed md:relative h-full w-64 transform md:translate-x-0`}
      >
        <h2 className="text-2xl font-bold mb-6 text-center">🤖 AI Chat</h2>

        <nav className="flex flex-col gap-4">
          {/* Chat History */}
          <SidebarItem
            icon={<MessageCircle />}
            label="Chat History"
            isOpen={activeMenu === 'history'}
            onClick={() => toggleMenu('history')}
            items={['Today', 'Yesterday', 'Old Chats']}
            actions={[
              {
                label: "Clear All",
                icon: <Trash2 size={16} />,
                onClick: handleClearHistory
              }
            ]}
          />

          {/* AI Tools */}
          <SidebarItem
            icon={<Bot />}
            label="AI Tools"
            isOpen={activeMenu === 'tools'}
            onClick={() => toggleMenu('tools')}
            items={[
              'Grammar Fix',
              'Summarizer',
              'Translator',
              'Code Helper',
              'AI Image Generator'
            ]}
          />

          {/* Settings */}
          <SidebarItem
            icon={<Settings />}
            label="Settings"
            isOpen={activeMenu === 'settings'}
            onClick={() => toggleMenu('settings')}
            items={['Toggle Theme', 'Logout']}
            actions={[
              {
                label: "Theme",
                icon: <Sun size={16} />,
                onClick: onToggleTheme
              },
              {
                label: "Logout",
                icon: <LogOut size={16} />,
                onClick: handleLogout
              }
            ]}
          />
        </nav>

        <div className="mt-auto text-center text-sm text-gray-400">
          © 2025 Ihsan AI
        </div>
      </div>
    </>
  );
};

const SidebarItem = ({ icon, label, items = [], isOpen, onClick, actions = [] }) => (
  <div>
    <div
      className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-700 cursor-pointer transition"
      onClick={onClick}
    >
      {icon}
      <span>{label}</span>
    </div>

    {isOpen && (
      <>
        <ul className="ml-8 mt-1 text-sm text-gray-300 list-disc">
          {items.map((item, index) => (
            <li key={index} className="py-1 hover:text-white cursor-pointer">{item}</li>
          ))}
        </ul>
        {actions.length > 0 && (
          <div className="mt-2 ml-8 flex flex-col gap-2">
            {actions.map((action, index) => (
              <button
                key={index}
                onClick={action.onClick}
                className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-200"
              >
                {action.icon} {action.label}
              </button>
            ))}
          </div>
        )}
      </>
    )}
  </div>
);

export default Sidebar;
