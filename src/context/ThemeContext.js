'use client';

import React, { createContext, useContext, useSyncExternalStore } from 'react';

const ThemeContext = createContext(null);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// The inline script in layout.tsx applies the saved theme before paint, so the
// <html> class is the source of truth; React just subscribes to it.
const subscribe = (onChange) => {
  const mo = new MutationObserver(onChange);
  mo.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
  return () => mo.disconnect();
};
const getSnapshot = () => document.documentElement.classList.contains('dark-theme');
const getServerSnapshot = () => false;

export const ThemeProvider = ({ children }) => {
  const isDark = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggleTheme = () => {
    const next = !isDark;
    document.documentElement.classList.toggle('dark-theme', next);
    try {
      localStorage.setItem('theme', next ? 'dark' : 'light');
    } catch {}
  };

  return <ThemeContext.Provider value={{ isDark, toggleTheme }}>{children}</ThemeContext.Provider>;
};
