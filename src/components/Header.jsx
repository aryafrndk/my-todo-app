import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Periksa preferensi dark mode dari localStorage
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode !== null) {
      return JSON.parse(savedMode);
    }
    // Jika tidak ada preferensi tersimpan, periksa preferensi sistem
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    const body = document.body;
    if (isDarkMode) {
      body.classList.add('dark');
    } else {
      body.classList.remove('dark');
    }
    // Simpan preferensi dark mode di localStorage
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <header className="bg-gray-600 text-white py-4 dark:bg-[#191919]">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold sm:text-3xl">To-Do List App</h1>
        <button
          className="px-3 py-1 rounded-md bg-gray-800 text-white hover:bg-gray-700 focus:outline-none"
          onClick={toggleDarkMode}
        >
          {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
      </div>
    </header>
  );
};

export default Header;
