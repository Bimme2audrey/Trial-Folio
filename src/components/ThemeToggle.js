'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Don't render theme-dependent content until mounted
  if (!isMounted) {
    return (
      <button
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label="Switch theme"
      >
        <div className="toggle-track">
          <div className="toggle-thumb">
            <span className="moon-icon">🌙</span>
          </div>
        </div>
      </button>
    );
  }

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
