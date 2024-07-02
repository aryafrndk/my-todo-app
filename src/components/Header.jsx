// Header.jsx
import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react'; // Import icons

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const body = document.body;
    if (isDarkMode) {
      body.classList.add('dark');
    } else {
      body.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <header className="bg-gray-600 text-white py-4 dark:bg-[#191919]">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">To-Do List App</h1>
        <button
          className="flex items-center px-3 py-1 rounded-full bg-[#0c0c0c] dark:bg-white dark:text-black hover:bg-gray-700 focus:outline-none"
          onClick={toggleDarkMode}
        >
          {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
      </div>
    </header>
  );
};

export default Header;
