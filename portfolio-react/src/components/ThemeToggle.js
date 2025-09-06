import React from 'react';
import { useTheme } from '../context/ThemeContext';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button 
      className="theme-toggle" 
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <div className="toggle-track">
        <div className="toggle-thumb">
          {isDark ? (
            <span className="sun-icon">☀️</span>
          ) : (
            <span className="moon-icon">🌙</span>
          )}
        </div>
      </div>
    </button>
  );
};

export default ThemeToggle;
