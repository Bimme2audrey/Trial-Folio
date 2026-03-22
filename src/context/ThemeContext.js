'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = savedTheme === 'dark' || (!savedTheme && prefersDark);

    setIsDark(shouldBeDark);

    if (shouldBeDark) {
      document.documentElement.classList.add('dark-theme');
    } else {
      document.documentElement.classList.remove('dark-theme');
    }
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark-theme');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark, isMounted]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  // Prevent hydration mismatch by not rendering theme-dependent UI until mounted
  if (!isMounted) {
    return (
      <ThemeContext.Provider value={{ isDark: false, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    );
  }

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
