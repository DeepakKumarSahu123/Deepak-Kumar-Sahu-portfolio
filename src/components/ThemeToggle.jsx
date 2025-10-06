import React, { useEffect, useState } from 'react';
import AppScreen from './AppScreen';

const ThemeToggle = ({ onClose }) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    if (darkMode) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <AppScreen title="Theme Toggle" onClose={onClose}>
      <div className="flex flex-col items-center gap-4 mt-6">
        <p className="text-sm dark:text-white">Current mode: {darkMode ? '🌙 Dark' : '☀️ Light'}</p>
        <button
          onClick={() => setDarkMode((prev) => !prev)}
          className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
        >
          Toggle Theme
        </button>
      </div>
    </AppScreen>
  );
};

export default ThemeToggle;
